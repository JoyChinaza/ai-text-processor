import React, { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import { detectLanguage, summarizeText, translateText } from "./utils/api";

const App = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    const userMessage = { text, type: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const detectedLang = await detectLanguage(text);
      const aiMessage = { text, type: "bot", lang: detectedLang };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSummarize = async (text) => {
    const summary = await summarizeText(text);
    setMessages((prev) => [...prev, { text: summary, type: "bot", isSummary: true }]);
  };

  const handleTranslate = async (text, targetLang) => {
    const translation = await translateText(text, targetLang);
    setMessages((prev) => [...prev, { text: translation, type: "bot", isTranslation: true }]);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-auto p-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} onSummarize={handleSummarize} onTranslate={handleTranslate} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default App;

