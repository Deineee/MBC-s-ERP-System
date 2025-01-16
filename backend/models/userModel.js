const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')

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
    position: {
      type: String,
      required: true,
      enum: [
        'president', 
        'vice-president', 
        'corporate secretary', 
        'finance officer', 
        'purchasing officer', 
        'warehouse officer', 
        'human resources', 
        'store-in-charge', 
        'cashier', 
        'sales personnel', 
        'driver',
        'staff'
      ],
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

// Static signup method
UserSchema.statics.signup = async function(firstName, middleName, lastName, email, password, position = 'staff') {
  // Validation
  if (!firstName || !middleName || !lastName || !email || !password || !position) {
    throw Error('All fields must be filled');
  }
  
  if (!validator.isEmail(email)) {
    throw Error('Email not valid');
  }  
  
  if (!validator.isStrongPassword(password/*, { minLength: 8, minSymbols: 1, minNumbers: 1 }*/)) {
    throw Error('Password not strong enough');
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error('Email already in use');
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create and return the new user
  const user = await this.create({ firstName, middleName, lastName, email, password: hash, position });

  return user;
}

// static login method
UserSchema.statics.login = async function(email, password) {

  if (!email || !password) {
    throw Error('All fields must be filled')
  }

  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('User', UserSchema)