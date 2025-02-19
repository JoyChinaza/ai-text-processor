const ChatInput = ({ inputText, setInputText, handleSend }) => {
  return (
    <div>
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Enter text..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default ChatInput;

