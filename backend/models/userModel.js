const mongoose = require('mongoose');

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
    },
    role: {
      type: String,
      required: true,
      enum: ['blank', 'blank', 'blank'], //fill this out pls!!!!
      default: 'admin',
    },
    email: {
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

module.exports = mongoose.model('User', UserSchema);

