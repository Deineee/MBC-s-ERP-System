let io;

function initSocket(server) {
  io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}

function getIO() {
  if (!io) {
    throw new Error('Socket.IO is not initialized!');
  }
  return io;
}

module.exports = { initSocket, getIO };
