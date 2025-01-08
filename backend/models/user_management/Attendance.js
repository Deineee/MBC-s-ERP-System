const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema(
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
    role: {
      type: String,
      required: true,
      enum: ['blank', 'blank', 'blank'], 
      default: 'admin',
    },
    rememberToken: {
      type: String,
      default: null, // Used for authentication (e.g., remember me functionality)
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('User', UserSchema);

