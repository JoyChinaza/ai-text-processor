const API_HEADERS = {
  "Content-Type": "application/json",
};

// Load API Keys from environment variables
const SUMMARIZER_API_KEY = import.meta.env.VITE_SUMMARIZER_API_KEY;
const TRANSLATOR_API_KEY = import.meta.env.VITE_TRANSLATOR_API_KEY;
const LANGUAGE_DETECTOR_API_KEY = import.meta.env.VITE_LANGUAGE_DETECTOR_API_KEY;

/**
 * Detects the language of the given text.
 */
export const detectLanguage = async (text) => {
  try {
    const response = await fetch("https://api.example.com/language-detect", {
      method: "POST",
      headers: { ...API_HEADERS, Authorization: `Bearer ${LANGUAGE_DETECTOR_API_KEY}` },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    return data.language || "unknown";
  } catch (error) {
    console.error("Language Detection Error:", error);
    return "error";
  }
};

/**
 * Summarizes text.
 */
export const summarizeText = async (text) => {
  try {
    const response = await fetch("https://api.example.com/summarize", {
      method: "POST",
      headers: { ...API_HEADERS, Authorization: `Bearer ${SUMMARIZER_API_KEY}` },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    return data.summary || "Could not generate summary.";
  } catch (error) {
    console.error("Summarization Error:", error);
    return "Error summarizing text.";
  }
};

/**
 * Translates text.
 */
export const translateText = async (text, targetLang) => {
  try {
    const response = await fetch("https://api.example.com/translate", {
      method: "POST",
      headers: { ...API_HEADERS, Authorization: `Bearer ${TRANSLATOR_API_KEY}` },
      body: JSON.stringify({ text, target_lang: targetLang }),
    });

    const data = await response.json();
    return data.translation || "Translation not available.";
  } catch (error) {
    console.error("Translation Error:", error);
    return "Error translating text.";
  }
};

