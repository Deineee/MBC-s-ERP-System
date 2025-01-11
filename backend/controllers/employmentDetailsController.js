const EmploymentDetails = require('../models/user_management/employmentDetailsModel');
const Employee = require('../models/user_management/employeeModel');

// Create employment details
const createEmploymentDetails = async (req, res) => {
  try {
    const { employment_id, payStatus, dateHired, dateRegularised, dateResigned, reasonForResignation } = req.body;

    // Check if the employee exists
    const employeeExists = await Employee.findById(employment_id);
    if (!employeeExists) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Check if employment details already exist for the employee
    const existingDetails = await EmploymentDetails.findOne({ employment_id });
    if (existingDetails) {
      return res.status(400).json({ message: 'Employment details already exist for this employee' });
    }

    const newEmploymentDetails = new EmploymentDetails({
      employment_id,
      payStatus,
      dateHired,
      dateRegularised,
      dateResigned,
      reasonForResignation,
    });

    await newEmploymentDetails.save();
    res.status(201).json({ message: 'Employment details created successfully', employmentDetails: newEmploymentDetails });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all employment details
const getAllEmploymentDetails = async (req, res) => {
  try {
    const employmentDetails = await EmploymentDetails.find().populate('employment_id', 'firstName lastName');
    res.status(200).json(employmentDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employment details by ID
const getEmploymentDetailsById = async (req, res) => {
  try {
    const employmentDetails = await EmploymentDetails.findById(req.params.id).populate('employment_id', 'firstName lastName');
    if (!employmentDetails) {
      return res.status(404).json({ message: 'Employment details not found' });
    }
    res.status(200).json(employmentDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update employment details
const updateEmploymentDetails = async (req, res) => {
  try {
    const updatedDetails = await EmploymentDetails.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedDetails) {
      return res.status(404).json({ message: 'Employment details not found' });
    }

    res.status(200).json({ message: 'Employment details updated successfully', employmentDetails: updatedDetails });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete employment details
const deleteEmploymentDetails = async (req, res) => {
  try {
    const deletedDetails = await EmploymentDetails.findByIdAndDelete(req.params.id);
    if (!deletedDetails) {
      return res.status(404).json({ message: 'Employment details not found' });
    }

    res.status(200).json({ message: 'Employment details deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEmploymentDetails,
  getAllEmploymentDetails,
  getEmploymentDetailsById,
  updateEmploymentDetails,
  deleteEmploymentDetails,
};
