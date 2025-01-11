const express = require('express');
const {
  createEmergencyContact,
  getEmergencyContacts,
  getEmergencyContactById,
  updateEmergencyContact,
  deleteEmergencyContact,
} = require('../controllers/emergencyContactController');

const router = express.Router();

// Routes for Emergency Contacts
router.post('/', createEmergencyContact); // Create an emergency contact
router.get('/', getEmergencyContacts); // Get all emergency contacts
router.get('/:id', getEmergencyContactById); // Get emergency contact by ID
router.put('/:id', updateEmergencyContact); // Update an emergency contact
router.delete('/:id', deleteEmergencyContact); // Delete an emergency contact

module.exports = router;
