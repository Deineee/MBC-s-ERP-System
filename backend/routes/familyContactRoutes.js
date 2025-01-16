const express = require('express');
const {
  createFamilyContact,
  getAllFamilyContacts,
  getFamilyContactById,
  updateFamilyContact,
  deleteFamilyContact,
} = require('../controllers/familyContactController');

const router = express.Router();

// Routes for Family Contact
router.post('/', createFamilyContact); // Create a family contact
router.get('/', getAllFamilyContacts); // Get all family contacts
router.get('/:id', getFamilyContactById); // Get a family contact by ID
router.put('/:id', updateFamilyContact); // Update a family contact
router.delete('/:id', deleteFamilyContact); // Delete a family contact

module.exports = router;
