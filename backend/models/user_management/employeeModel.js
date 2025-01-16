const mongoose = require('mongoose');

// const Employee = require('./employeeModel'); 

const EmployeeSchema = new mongoose.Schema(
  {
    employee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      trim: true,
      unique: true,
    },
    firstName: {
        type:String,
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
    birthDate: {
        type: Date,
        required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contactNumber: {
        type: String,
        required: true,
        match: [/^\d+$/, 'Contact number must contain only digits'],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Employee', EmployeeSchema);

