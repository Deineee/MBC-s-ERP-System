const Credentials = require('../models/user_management/credentialsModel'); 
const User = require('../models/userModel'); 
const Employee = require('../models/user_management/employeeModel'); 

// Create new credentials
const createCredentials = async (req, res) => {
  const { userName, password, employee_id } = req.body;

  try {
    const userExists = await User.findOne({ userName });
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    const employeeExists = await Employee.findById(employee_id);
    if (!employeeExists) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    const credentials = await Credentials.create({ username: userName, password, employee_id });
    res.status(201).json(credentials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all credentials
const getAllCredentials = async (req, res) => {
  try {
    const credentials = await Credentials.find().populate('employee_id', 'firstName lastName');
    res.status(200).json(credentials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get credentials by ID
const getCredentialsById = async (req, res) => {
  const { id } = req.params;

  try {
    const credentials = await Credentials.findById(id).populate('employee_id', 'firstName lastName');
    if (!credentials) {
      return res.status(404).json({ message: 'Credentials not found' });
    }
    res.status(200).json(credentials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update credentials
const updateCredentials = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedCredentials = await Credentials.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCredentials) {
      return res.status(404).json({ message: 'Credentials not found' });
    }

    res.status(200).json(updatedCredentials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete credentials
const deleteCredentials = async (req, res) => {
  const { id } = req.params;

  try {
    const credentials = await Credentials.findByIdAndDelete(id);

    if (!credentials) {
      return res.status(404).json({ message: 'Credentials not found' });
    }

    res.status(200).json({ message: 'Credentials deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCredentials,
  getAllCredentials,
  getCredentialsById,
  updateCredentials,
  deleteCredentials,
};
