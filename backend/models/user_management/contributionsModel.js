const mongoose = require('mongoose');

// const Employee = require('./Employee'); 

// Define the Contributions Schema
const ContributionsSchema = new mongoose.Schema({
  employee_id: {
    type: mongoose.Schema.Types.ObjectId, // Refers to the Employee schema
    ref: 'Employee',
    required: true
  },
  sss_number: {
    type: String,
    required: true,
    unique: true 
  },
  philhealth_number: {
    type: String,
    required: true,
    unique: true 
  },
  pagibig_number: {
    type: String,
    required: true,
    unique: true 
  },
  tin_number: {
    type: String,
    required: true,
    unique: true 
  }
}, {
  timestamps: true 
});

const Contributions = mongoose.model('Contributions', ContributionsSchema);

module.exports = Contributions;
