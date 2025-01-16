const mongoose = require('mongoose');

// const Employee = require('./employeeModel'); 

const FamilyContactSchema = new mongoose.Schema(
  {
    family_contact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',  
      required: true,
      unique: true,
    },
    name: {
        type:String,
        required: true,
        trim: true,
    },
    relationship: {
        type: String,
        required: true, // Ensure the field is mandatory
        trim: true, // Remove extra spaces
    },
    contact_number: {
        type: String,
        required: true, // Ensure the field is mandatory
        trim: true, // Remove extra spaces
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('Family Contact', FamilyContactSchema);

