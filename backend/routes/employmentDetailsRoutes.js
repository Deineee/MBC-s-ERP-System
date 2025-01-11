const express = require('express');
const {
  createEmploymentDetails,
  getAllEmploymentDetails,
  getEmploymentDetailsById,
  updateEmploymentDetails,
  deleteEmploymentDetails,
} = require('../controllers/employmentDetailsController');

const router = express.Router();

// Routes for Employment Details
router.post('/', createEmploymentDetails); // Create employment details
router.get('/', getAllEmploymentDetails); // Get all employment details
router.get('/:id', getEmploymentDetailsById); // Get employment details by ID
router.put('/:id', updateEmploymentDetails); // Update employment details
router.delete('/:id', deleteEmploymentDetails); // Delete employment details

module.exports = router;
