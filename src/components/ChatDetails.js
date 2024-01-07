// ChatDetails.js
import React, { useEffect, useState } from 'react';
import '../styles/ChatDetails.css';
import { formatDate } from '../utils/DateUtils';
import ProfilePic from './ProfilePic';

const ChatDetails = ({ selectedChat }) => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    setChatMessages([...selectedChat.messageList]);
  }, [selectedChat]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        messageId: chatMessages.length + 1,
        sender: 'USER',
        message,
        timestamp: Date.now(),
      };

      setChatMessages([...chatMessages, newMessage]);
      setMessage('');
    }
  };

  const renderMessages = () => {
    if (chatMessages.length === 0) {
        return(
            <div className='no-messages'>
                <h4>Send a message to start chatting</h4>
            </div>
        );
    }

    return (
        chatMessages.map((msg) => {
            const { messageId, sender, message, timestamp, messageType, options } = msg;
            const date = formatDate(timestamp);

            if (messageType === 'optionedMessage') {
                return (
                    <div className="message-options">
                      <div className="message-text">{message}</div>
                      <div className="options-list">
                        {options.map((option, index) => (
                          <div key={index} className="option-section">
                            <div className='option-item'>{option.optionText}</div>
                            <div className='option-subtext'>{option.optionSubText}</div>
                          </div>
                          
                        ))}
                      </div>
                    </div>
                  );    
            }

            return (
                <div key={messageId} className={`message ${sender === 'USER' ? 'user-sent' : 'received'}`}>
                    <div className="message-content">
                    <div className="message-text">{message}</div>
                    <div className={`message-date ${sender === 'USER' ? 'date-sent' : 'date-received'}`}>{date}</div>
                    </div>
                </div>
            );
            }
        )
    );
  };

  return (
        <div className="chat-details-container">
            <div className="chat-header">
                <ProfilePic imageUrl={selectedChat.imageURL} />
                <h2>{selectedChat.title}</h2>
            </div>
            <div className="chat-messages">
                {renderMessages()}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatDetails;
