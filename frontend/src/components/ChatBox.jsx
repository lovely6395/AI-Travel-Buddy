import React, { useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const ChatBox = ({ messages, isLoading }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="chat-container">
      {messages.length === 0 && !isLoading && (
         <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '40px' }}>
            <p>👋 Welcome to India AI Travel Buddy!</p>
            <p style={{ fontSize: '0.9rem', marginTop: '8px' }}>Ask me for itineraries, waterfalls, or best places to visit.</p>
         </div>
      )}
      
      {messages.map((msg, index) => (
        <div key={index} className={`message-wrapper ${msg.sender === 'user' ? 'message-user' : 'message-bot'}`}>
          <div className="message-bubble">
            {msg.sender === 'bot' ? (
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            ) : (
              msg.text
            )}
          </div>
        </div>
      ))}
      
      {isLoading && (
        <div className="typing-indicator">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      )}
      
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatBox;
