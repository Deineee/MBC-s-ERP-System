const mongoose = require('mongoose');

const FamilyContactSchema = new mongoose.Schema(
  {
    family_contact: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
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
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('Family Contact', FamilyContactSchema);

