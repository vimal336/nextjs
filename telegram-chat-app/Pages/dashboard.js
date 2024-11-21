import { useState } from 'react';

const Dashboard = ({ chatId }) => {
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const res = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ chatId, message }),
    });

    const data = await res.json();
    if (data.success) {
      alert('Message sent!');
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default Dashboard;

// Pass `chatId` as a prop from the authentication handler.
