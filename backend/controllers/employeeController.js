const Employee = require('../models/user_management/employeeModel');



const createEmployee = async (req, res) => {
  try {
    const { employee_id, firstName, middleName, lastName, birthDate, address, contactNumber, position } = req.body;

    
    const newEmployee = new Employee({
      employee_id,
      firstName,
      middleName,
      lastName,
      birthDate,
      address,
      contactNumber,
      position,
    });

    await newEmployee.save();
    res.status(201).json({ message: 'Employee created successfully', employee: newEmployee });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee updated successfully', employee: updatedEmployee });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
