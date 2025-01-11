const express = require('express');
const {
  createContributions,  
  getAllContributions,  
  getContributionsById, 
  updateContributions,  
  deleteContributions   
} = require('../controllers/contributionsController');

const router = express.Router();

// Create a new contribution record
router.post('/', createContributions);  // Match the name

// Get all contribution records
router.get('/', getAllContributions);  // Match the name

// Get a single contribution record by ID
router.get('/:id', getContributionsById);  // Match the name

// Update a contribution record
router.patch('/:id', updateContributions);  // Match the name

// Delete a contribution record
router.delete('/:id', deleteContributions);  // Match the name

module.exports = router;
