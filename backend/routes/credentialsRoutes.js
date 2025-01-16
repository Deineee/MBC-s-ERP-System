const express = require('express');
const {
  createCredentials,
  getAllCredentials,
  getCredentialsById,
  updateCredentials,
  deleteCredentials,
} = require('../controllers/credentialsController'); 

const router = express.Router();

// Create new credentials
router.post('/', createCredentials);

// Get all credentials
router.get('/', getAllCredentials);

// Get credentials by ID
router.get('/:id', getCredentialsById);

// Update credentials
router.patch('/:id', updateCredentials);

// Delete credentials
router.delete('/:id', deleteCredentials);

module.exports = router;
