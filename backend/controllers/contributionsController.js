const Contributions = require('../models/contributionsModel'); // Adjust the path as necessary
const Employee = require('../models/employeeModel'); // Adjust the path as necessary

// Get all contributions
const getAllContributions = async (req, res) => {
  try {
    const contributions = await Contributions.find().populate('employee_id', 'firstName lastName');
    res.status(200).json(contributions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get contributions by ID
const getContributionsById = async (req, res) => {
  const { id } = req.params;

  try {
    const contribution = await Contributions.findById(id).populate('employee_id', 'firstName lastName');
    if (!contribution) {
      return res.status(404).json({ message: 'Contribution not found' });
    }
    res.status(200).json(contribution);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create new contributions
const createContributions = async (req, res) => {
  const { employee_id, sss_number, philhealth_number, pagibig_number, tin_number } = req.body;

  try {
    // Ensure the employee exists
    const employeeExists = await Employee.findById(employee_id);
    if (!employeeExists) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Check for duplicate contribution entries (e.g., SSS, PhilHealth, Pag-IBIG, TIN numbers)
    const duplicate = await Contributions.findOne({
      $or: [
        { sss_number },
        { philhealth_number },
        { pagibig_number },
        { tin_number },
      ],
    });

    if (duplicate) {
      return res.status(400).json({ message: 'Duplicate contribution details found' });
    }

    // Create a new contribution
    const contribution = await Contributions.create({
      employee_id,
      sss_number,
      philhealth_number,
      pagibig_number,
      tin_number,
    });

    res.status(201).json(contribution);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update contributions
const updateContributions = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedContribution = await Contributions.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure schema validation
    });

    if (!updatedContribution) {
      return res.status(404).json({ message: 'Contribution not found' });
    }

    res.status(200).json(updatedContribution);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete contributions
const deleteContributions = async (req, res) => {
  const { id } = req.params;

  try {
    const contribution = await Contributions.findByIdAndDelete(id);

    if (!contribution) {
      return res.status(404).json({ message: 'Contribution not found' });
    }

    res.status(200).json({ message: 'Contribution deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllContributions,
  getContributionsById,
  createContributions,
  updateContributions,
  deleteContributions,
};
