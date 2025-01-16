require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const attendanceRoutes = require('./routes/attendanceRoutes');
const contributionsRoutes = require('./routes/contributionsRoutes');
const credentialsRoutes = require('./routes/credentialsRoutes');
const emergencyContactRoutes = require('./routes/emergencyContactRoutes');
const employmentDetailsRoutes = require('./routes/employmentDetailsRoutes');
const familyContactRoutes = require('./routes/familyContactRoutes');

// Import http and socket.io
const http = require('http');
const socketIo = require('socket.io');

// Express app initialization
const mbc = express();

// Create HTTP server *after* initializing the Express app
const server = http.createServer(mbc);

// Initialize socket.io
const io = socketIo(server);

// Middleware setup
mbc.use(express.json())

mbc.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// WebSocket connection for real-time notifications
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle user disconnect
  socket.on('disconnect', () => {
      console.log('User disconnected');
  });
});

// Emit event when a new user is created
const createUser = (user) => {
  console.log(`A new user was created: ${user.firstName} ${user.lastName} (${user.email})`);
  // Emit the event to all connected clients
  io.emit('userCreated', { message: `A new user has been created: ${user.firstName} ${user.lastName}` });
};

// Routes setup
mbc.use('/api/user', userRoutes)
mbc.use('/api/attendance', attendanceRoutes);
mbc.use('/api/contributions', contributionsRoutes);
mbc.use('/api/credentials', credentialsRoutes);
mbc.use('/api/emergency-contacts', emergencyContactRoutes);
mbc.use('/api/employment-details', employmentDetailsRoutes);
mbc.use('/api/family-contacts', familyContactRoutes);

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    mbc.listen(process.env.PORT, () => {
      console.log('connected to DB and listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

module.exports = { io };
