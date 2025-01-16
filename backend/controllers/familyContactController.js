const FamilyContact = require('../models/user_management/familyContactModel');
const Employee = require('../models/user_management/employeeModel');

// Create a family contact
const createFamilyContact = async (req, res) => {
  try {
    const { family_contact, name, relationship, contact_number } = req.body;

    // Check if the employee exists
    const employeeExists = await Employee.findById(family_contact);
    if (!employeeExists) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Check if family contact already exists for the employee
    const existingContact = await FamilyContact.findOne({ family_contact });
    if (existingContact) {
      return res.status(400).json({ message: 'Family contact already exists for this employee' });
    }

    const newFamilyContact = new FamilyContact({
      family_contact,
      name,
      relationship,
      contact_number,
    });

    await newFamilyContact.save();
    res.status(201).json({ message: 'Family contact created successfully', familyContact: newFamilyContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all family contacts
const getAllFamilyContacts = async (req, res) => {
  try {
    const familyContacts = await FamilyContact.find().populate('family_contact', 'firstName lastName');
    res.status(200).json(familyContacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a family contact by ID
const getFamilyContactById = async (req, res) => {
  try {
    const familyContact = await FamilyContact.findById(req.params.id).populate('family_contact', 'firstName lastName');
    if (!familyContact) {
      return res.status(404).json({ message: 'Family contact not found' });
    }
    res.status(200).json(familyContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a family contact
const updateFamilyContact = async (req, res) => {
  try {
    const updatedContact = await FamilyContact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedContact) {
      return res.status(404).json({ message: 'Family contact not found' });
    }

    res.status(200).json({ message: 'Family contact updated successfully', familyContact: updatedContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a family contact
const deleteFamilyContact = async (req, res) => {
  try {
    const deletedContact = await FamilyContact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Family contact not found' });
    }

    res.status(200).json({ message: 'Family contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFamilyContact,
  getAllFamilyContacts,
  getFamilyContactById,
  updateFamilyContact,
  deleteFamilyContact,
};
