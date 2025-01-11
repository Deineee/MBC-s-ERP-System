const EmergencyContact = require('../models/user_management/emergencyContactModel');

// Create a new emergency contact
const createEmergencyContact = async (req, res) => {
  try {
    const { employee_id, name, relationship, contact } = req.body;

    // Check if employee exists
    const existingContact = await EmergencyContact.findOne({ employee_id, contact });
    if (existingContact) {
      return res.status(400).json({ message: 'Emergency contact already exists for this employee.' });
    }

    const newContact = new EmergencyContact({ employee_id, name, relationship, contact });
    await newContact.save();

    res.status(201).json({ message: 'Emergency contact created successfully', emergencyContact: newContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all emergency contacts
const getEmergencyContacts = async (req, res) => {
  try {
    const contacts = await EmergencyContact.find().populate('employee_id', 'firstName lastName');
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an emergency contact by ID
const getEmergencyContactById = async (req, res) => {
  try {
    const contact = await EmergencyContact.findById(req.params.id).populate('employee_id', 'firstName lastName');
    if (!contact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an emergency contact
const updateEmergencyContact = async (req, res) => {
  try {
    const updatedContact = await EmergencyContact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedContact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }

    res.status(200).json({ message: 'Emergency contact updated successfully', emergencyContact: updatedContact });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an emergency contact
const deleteEmergencyContact = async (req, res) => {
  try {
    const deletedContact = await EmergencyContact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }

    res.status(200).json({ message: 'Emergency contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEmergencyContact,
  getEmergencyContacts,
  getEmergencyContactById,
  updateEmergencyContact,
  deleteEmergencyContact,
};
