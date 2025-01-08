const mongoose = require('mongoose');

const User = require('.user_management/User');
const Employee = require('./Employee'); 

const CredentialsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    ref: 'User', // Reference to User schema
  },
  password: {
    type: String,
    required: true,
  },
  employee_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee', // Reference to Employee schema
    required: true,
  },
}, {
  timestamps: true, 
});

// Create the Credentials model
const Credentials = mongoose.model('Credentials', CredentialsSchema);

module.exports = Credentials;
