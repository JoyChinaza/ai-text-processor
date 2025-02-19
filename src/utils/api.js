const API_URL = "https://chromeai.googleapis.com/v1";

export const detectLanguage = async (text) => {
  const response = await fetch(`${API_URL}/languageDetection`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const data = await response.json();
  return data.language;
};

export const summarizeText = async (text) => {
  const response = await fetch(`${API_URL}/summarizer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const data = await response.json();
  return data.summary;
};

export const translateText = async (text, targetLang) => {
  const response = await fetch(`${API_URL}/translator`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, targetLang }),
  });
  const data = await response.json();
  return data.translation;
};
