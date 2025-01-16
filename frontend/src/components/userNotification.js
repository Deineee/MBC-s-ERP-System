// src/components/UserNotification.js
import { useEffect } from 'react';
import io from 'socket.io-client'; // Import socket.io-client
import { toast } from 'react-toastify'; // Optional: For toast notifications

// Initialize WebSocket connection
const socket = io('http://localhost:3000'); // Replace with your actual server URL if different

const UserNotification = () => {
  useEffect(() => {
    // Listen for the 'userCreated' event from the WebSocket server
    socket.on('userCreated', (data) => {
      // Show a toast or any other notification to the user
      toast.success(data.message);  // This will display a success toast with the message from the backend
    });

    // Cleanup the WebSocket connection when the component unmounts
    return () => {
      socket.off('userCreated');  // Remove the event listener when the component is destroyed
    };
  }, []);

  return <></>; // This component does not render anything, it just listens for events
};

export default UserNotification;
