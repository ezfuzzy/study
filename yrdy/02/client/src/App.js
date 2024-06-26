import React, { useState } from 'react';
import ChatPopup from './ChatPopup';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        Chat
      </button>
      {isChatOpen && <ChatPopup onClose={toggleChat} />}
    </div>
  );
}

export default App;
