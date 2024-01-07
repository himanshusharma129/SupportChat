import React, { useEffect, useState } from 'react';
import '../styles/HomePage.css';
import SearchBar from './SearchBar';
import { fetchChatData } from '../services/ChatService';
import ChatList from './ChatList';
import ChatDetails from './ChatDetails';

function HomePage() {
	const defaultState = {
		isChatsLoading: false,
	};
    const [searchTerm, setSearchTerm] = useState('');
    const [chats, setChats] = useState([]);
	const [state, setState] = useState(defaultState);
	const [selectedChat, setSelectedChat] = useState(null);
	const filteredChats = chats.filter(chat =>
		chat.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
		chat.title.toLowerCase().includes(searchTerm.toLowerCase())
	  );

    const handleSearch = (text) => {
        setSearchTerm(text);
    };

	const handleChatClick = (chatId) => {
		const chat = chats.find(chat => chat.id === chatId);
		setSelectedChat(chat);
	  };

    const fetchChats = async () => {
        const data = await fetchChatData();
        setChats(data);
		setState({ ...state, isChatsLoading: false });
    }

	useEffect(() => {
		if(state.isChatsLoading) {
			fetchChats()
		}
	}, [state.isChatsLoading]);

    useEffect(() => {
		if (!state.isChatsLoading) {
			setState({ ...state, isChatsLoading: true });
		}
    }, []);


  return (
    <div className="home">
      <header className="home-header">
        <h1>Flipkart Chat App</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
	  <div className='home-chat-container'>
		<ChatList chatData={filteredChats} onChatClick={handleChatClick} activeChat={selectedChat?.id}/>
		{selectedChat && <ChatDetails selectedChat={selectedChat}/>}
	  </div>
    </div>
  );
}

export default HomePage;
