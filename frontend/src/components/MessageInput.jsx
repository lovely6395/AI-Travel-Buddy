import React, { useState } from 'react';

const MessageInput = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          className="chat-input"
          placeholder="e.g. Suggest a 5-day itinerary in India"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" className="send-button" disabled={!input.trim() || isLoading}>
          <svg className="send-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
