import React, { useState } from 'react';

const ChatClient = () => {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input_value: inputValue }),
        });

        const data = await response.json();
        setMessages((prev) => [...prev, data.message]);
        setInputValue('');
    };

    return (
        <div>
            <h1>Chat Client</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default ChatClient;
