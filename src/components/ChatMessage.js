import React from "react";

const ChatMessage = ({ message, onSummarize, onTranslate }) => {
  return (
    <div className={`p-3 rounded-lg my-2 ${message.type === "user" ? "bg-blue-600 self-end" : "bg-gray-700 self-start"}`}>
      <p>{message.text}</p>
      {message.lang && <small className="block text-gray-400">Detected Language: {message.lang}</small>}
      {message.text.length > 150 && message.lang === "en" && (
        <button onClick={() => onSummarize(message.text)} className="mt-2 text-sm text-blue-400 underline">
          Summarize
        </button>
      )}
      {!message.isTranslation && (
        <select onChange={(e) => onTranslate(message.text, e.target.value)} className="mt-2 text-sm text-white bg-gray-800">
          <option value="">Translate to...</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="pt">Portuguese</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
        </select>
      )}
    </div>
  );
};

export default ChatMessage;
