<<<<<<< HEAD
import React, { useState } from "react";
import { summarizeText, translateText, detectLanguage } from "./utils/api";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [summary, setSummary] = useState("");
  const [translation, setTranslation] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en");

  const handleSend = async () => {
    if (!inputText.trim()) return;

    setOutputText(inputText);

    // Detect Language
    const lang = await detectLanguage(inputText);
    setDetectedLanguage(lang);

    // Clear previous summary & translation
    setSummary("");
    setTranslation("");
  };

  const handleSummarize = async () => {
    if (detectedLanguage === "en" && outputText.length > 150) {
      const summaryResult = await summarizeText(outputText);
      setSummary(summaryResult);
    }
  };

  const handleTranslate = async () => {
    const translationResult = await translateText(outputText, targetLanguage);
    setTranslation(translationResult);
  };
=======
import React from "react";
import TextProcessor from "./components/TextProcessor";
>>>>>>> ef4c994 (an ai text processor)

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white p-4 rounded shadow">
        <ChatInput inputText={inputText} setInputText={setInputText} handleSend={handleSend} />
        {outputText && <ChatMessage outputText={outputText} />}
        {detectedLanguage === "en" && outputText.length > 150 && (
          <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded" onClick={handleSummarize}>
            Summarize
          </button>
        )}
        <select className="mt-2 p-2 border" onChange={(e) => setTargetLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
        <button className="mt-2 bg-purple-500 text-white px-4 py-2 rounded" onClick={handleTranslate}>
          Translate
        </button>
        {summary && <p className="mt-2"><strong>Summary:</strong> {summary}</p>}
        {translation && <p className="mt-2"><strong>Translation:</strong> {translation}</p>}
      </div>
=======
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <TextProcessor />
>>>>>>> ef4c994 (an ai text processor)
    </div>
  );
};

export default App;

