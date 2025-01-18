require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { initSocket } = require('./utils/socket');
const userRoutes = require('./routes/user');
const attendanceRoutes = require('./routes/attendanceRoutes');
const contributionsRoutes = require('./routes/contributionsRoutes');
const credentialsRoutes = require('./routes/credentialsRoutes');
const emergencyContactRoutes = require('./routes/emergencyContactRoutes');
const employmentDetailsRoutes = require('./routes/employmentDetailsRoutes');
const familyContactRoutes = require('./routes/familyContactRoutes');

// Express app initialization
const mbc = express();

// Create HTTP server
const server = http.createServer(mbc);

// Initialize Socket.IO
initSocket(server);

// Middleware setup
mbc.use(express.json());

mbc.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes setup
mbc.use('/api/user', userRoutes);
mbc.use('/api/attendance', attendanceRoutes);
mbc.use('/api/contributions', contributionsRoutes);
mbc.use('/api/credentials', credentialsRoutes);
mbc.use('/api/emergency-contacts', emergencyContactRoutes);
mbc.use('/api/employment-details', employmentDetailsRoutes);
mbc.use('/api/family-contacts', familyContactRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log('connected to DB and listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
