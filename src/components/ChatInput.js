import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-4 bg-gray-800">
      <textarea
        className="flex-1 p-2 bg-gray-700 text-white rounded-md"
        rows="2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit" className="ml-2 p-2 bg-blue-500 rounded-md">
        <PaperAirplaneIcon className="h-6 w-6 text-white" />
      </button>
    </form>
  );
};

export default ChatInput;
