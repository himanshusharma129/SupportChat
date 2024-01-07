import React from 'react';
import '../styles/HomePage.css';
import { formatDate } from '../utils/DateUtils';
import ProfilePic from './ProfilePic';

const ChatList = ({ chatData, onChatClick, activeChat }) => {
	if(chatData.length === 0) {
		return <div className="chat-list">Loading chats</div>
	}

  return (
    <div className="chat-lists">
      {chatData.map((chat) => {
		const { id, latestMessageTimestamp, imageURL, orderId, title, messageList } = chat;
		const latestMessage = messageList[messageList.length - 1];
		const date = formatDate(latestMessageTimestamp);
        const isActive = activeChat === id;

		return (
			<div className={`chat-item chat-list-item ${isActive ? 'active-chat' : ''}`} key={id} onClick={() => onChatClick(id)}>
			<div className='chat-profile-title'>
				<ProfilePic imageUrl={imageURL} />
				<div className="chat-details">
					<div className="chat-title-wrapper">
						<div className="chat-title">{title}</div>
						<div className="chat-title">{orderId}</div>
					</div>
					<div className="chat-message">{latestMessage?.message}</div>
				</div>
			</div>  
			<div className="date">{date}</div>
			</div>
		);
      })}
    </div>
  );
};

export default ChatList;