const Attendance = require('../models/user_management/attendanceModel'); 
const Employee = require('../models/user_management/employeeModel'); 


const createAttendance = async (req, res) => {
  const { employeeId, timeIn, timeOut, overtime, late, absent, reasonForAbsence } = req.body;

  try {
    // Ensure the employee exists
    const employeeExists = await Employee.findById(employeeId);
    if (!employeeExists) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    
    const attendance = await Attendance.create({
      employeeId,
      timeIn,
      timeOut,
      overtime,
      late,
      absent,
      reasonForAbsence,
    });

    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all attendance records
const getAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().populate('employeeId', 'firstName lastName');
    res.status(200).json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAttendanceById = async (req, res) => {
  const { id } = req.params;

  try {
    const attendance = await Attendance.findById(id).populate('employeeId', 'firstName lastName');
    if (!attendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an attendance record
const updateAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAttendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json(updatedAttendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an attendance record
const deleteAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(id);
    if (!deletedAttendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.status(200).json({ message: 'Attendance record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAttendance,
  getAttendanceRecords,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
};
