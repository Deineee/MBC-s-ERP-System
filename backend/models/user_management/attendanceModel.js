const mongoose = require('mongoose');

const Employee = require('./Employee'); 

const AttendanceSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId, // References the employee schema
      ref: 'Employee', // Assumes you have an "Employee" schema
      required: true,
    },
    timeIn: {
      type: Date,
      required: true,
    },
    timeOut: {
      type: Date,
      required: false, // Optional if the employee hasn't clocked out yet
    },
    overtime: {
      type: Number, // In hours or minutes
      default: 0,
    },
    late: {
      type: Boolean, 
      default: false,
    },
    absent: {
      type: Boolean,
      default: false,
    },
    reasonForAbsence: {
      type: String,
      required: function () {
        return this.absent; // Required only if the employee is marked absent
      },
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Attendance = mongoose.model('Attendance', AttendanceSchema);

module.exports = Attendance;
