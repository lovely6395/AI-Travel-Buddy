import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import MessageInput from './components/MessageInput';

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (query) => {
    // Add user message to UI
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch from backend');
      }

      const data = await response.json();
      
      // Add bot response to UI
      setMessages([...newMessages, { sender: 'bot', text: data.response }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([...newMessages, { 
        sender: 'bot', 
        text: "**System Error:** Could not reach the server. Please ensure the backend server is running on `http://localhost:5000`." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-icon">🌲</div>
        <div>
          <h1>India AI Travel Buddy</h1>
          <p>Your smart guide to exploring the wilderness</p>
        </div>
      </header>
      
      <ChatBox messages={messages} isLoading={isLoading} />
      <MessageInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default App;
