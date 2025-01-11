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
    position: {
        type: String, 
        required: true,
        enum: ['president', 'vice-president', 'corporate secretary', 'finance officer', 'purchasing officer', 'warehouse officer', 'human resources', 'store-in-charge', 'cashier', 'sales personnel', 'driver'],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Employee', EmployeeSchema);

