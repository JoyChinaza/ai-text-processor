const ChatMessage = ({ outputText }) => {
  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <p>{outputText}</p>
    </div>
  );
};

export default ChatMessage;

