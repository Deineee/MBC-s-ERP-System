const mongoose = require('mongoose');
const User = require('../userModel');
const Employee = require('./employeeModel'); 

// Define the EmergencyContact Schema
const EmergencyContactSchema = new mongoose.Schema({
  employee_id: {
    type: mongoose.Schema.Types.ObjectId, // Refers to the Employee schema
    ref: 'Employee',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  relationship: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Validate phone number format (you can adjust the regex for your use case)
        return /\d{11}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps automatically
});

// Create the EmergencyContact Model
const EmergencyContact = mongoose.model('EmergencyContact', EmergencyContactSchema);

module.exports = EmergencyContact;
