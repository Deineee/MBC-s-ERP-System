const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['admin', 'cashier', 'staff'], //fill this out pls!!!!
      default: 'staff',
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rememberToken: {
      type: String,
      default: null, // Used for authentication (e.g., remember me functionality)
    },
  },
  {
    timestamps: true, 
  }
);

// Static method for signup
UserSchema.statics.signup = async function (userData) {
  const { firstName, lastName, userName, role, email, password } = userData;

  // Check if username already exists
  const existingUserName = await this.findOne({ userName });
  if (existingUserName) {
    throw new Error('Username already in use');
  }

  // Check if email already exists
  const existingEmail = await this.findOne({ email });
  if (existingEmail) {
    throw new Error('Email already in use');
  }

  // Hash the password before saving
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the user
  const user = await this.create({
    firstName,
    lastName,
    userName,
    role,
    email,
    password: hashedPassword,
  });

  return user;
};


// Static method for login
UserSchema.statics.login = async function (userName, password) {
  // Find the user by username
  const user = await this.findOne({ userName });
  if (!user) {
    throw new Error('Invalid username or password');
  }

  // Compare the entered password with the stored hash
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid username or password');
  }

  // Generate a JWT token
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d', // expiration time
  });

  return { user, token };
};

module.exports = mongoose.model('User', UserSchema);
