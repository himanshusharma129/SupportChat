async function fetchChatData() {
    try {
      const response = await fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
};

module.exports = {
    fetchChatData,
}