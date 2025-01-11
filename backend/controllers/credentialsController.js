const Credentials = require('../models/user_management/credentialsModel'); 
const User = require('../models/userModel'); 
const Employee = require('../models/user_management/employeeModel'); 

// Create new credentials
const createCredentials = async (req, res) => {
  const { userName, password, employee_id } = req.body;

  try {
    // Ensure the user exists
    const userExists = await User.findOne({ userName }); // Match field name
    if (!userExists) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Ensure the employee exists
    const employeeExists = await Employee.findById(employee_id);
    if (!employeeExists) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Create credentials
    const credentials = await Credentials.create({ username: userName, password, employee_id });
    res.status(201).json(credentials);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
