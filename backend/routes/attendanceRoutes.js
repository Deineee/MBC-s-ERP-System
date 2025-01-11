const express = require('express');
const {
  createAttendance,
  getAttendanceRecords,
  getAttendanceById,
  updateAttendance,
  deleteAttendance,
} = require('../controllers/attendanceController');

const router = express.Router();

// Create a new attendance record
router.post('/', createAttendance);

// Get all attendance records
router.get('/', getAttendanceRecords);

// Get a single attendance record by ID
router.get('/:id', getAttendanceById);

// Update an attendance record
router.patch('/:id', updateAttendance);

// Delete an attendance record
router.delete('/:id', deleteAttendance);

module.exports = router;
