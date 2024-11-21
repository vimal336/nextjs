"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [chatId, setChatId] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        try {
            const response = await axios.post('/api/sendMessage', {
                chatId,
                message,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 bg-gray-100 p-4 rounded shadow-md">
            <input
                type="text"
                placeholder="Chat ID"
                value={chatId}
                onChange={(e) => setChatId(e.target.value)}
                className="border border-gray-300 rounded p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                onClick={sendMessage} 
                className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition duration-200"
            >
                Send Message
            </button>
        </div>
    );
};

export default Chat;
