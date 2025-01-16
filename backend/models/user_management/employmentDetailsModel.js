const mongoose = require('mongoose');

// const Employee = require('./employeeModel'); 

const EmploymentDetailsSchema = new mongoose.Schema(
  {
    employment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
      unique: true,
    },
    payStatus: {
        type: String,
        required: true, // Ensure the field is mandatory
        trim: true, // Remove extra spaces
    },
    dateHired: {
        type: Date,
        required: true, // Ensure the field is mandatory
    },
    dateRegularised: {
        type: Date,
        default: null, // Optional field, default to null
    },
    dateResigned: {
        type: Date,
        default: null, // Optional field, default to null
    },
    reasonForResignation: {
        type: String,
        trim: true, // Remove extra spaces
        default: null, // Optional field, default to null
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Employment Details', EmploymentDetailsSchema);

