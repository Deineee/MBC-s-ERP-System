const express = require('express');
const {
  createContribution,
  getContributions,
  getContributionById,
  updateContribution,
  deleteContribution,
} = require('../controllers/contributionsController');

const router = express.Router();

// Create a new contribution record
router.post('/', createContribution);

// Get all contribution records
router.get('/', getContributions);

// Get a single contribution record by ID
router.get('/:id', getContributionById);

// Update a contribution record
router.patch('/:id', updateContribution);

// Delete a contribution record
router.delete('/:id', deleteContribution);

module.exports = router;
