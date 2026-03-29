import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "dummy_key");

export const generateChatResponse = async (query, context) => {
  if (!process.env.GEMINI_API_KEY) {
      return "Hello! I am your AI Travel Buddy. It seems the GEMINI_API_KEY is not configured yet. I'm running in demo mode without AI capabilities. But I'll be happy to help you explore India once you add the key to the backend/.env file!";
  }

  const prompt = `
You are the "Virtual AI Travel Buddy," a highly knowledgeable and friendly travel assistant expert specializing in tourism across all of India. 
Respond in a conversational, helpful, and engaging tone. Format your response cleanly using markdown (bullet points, bold text).

User Query: ${query}

Additional Real-Time Context Scraped from Web (if any):
${context || 'No specific new context found.'}

Please recommend places, itineraries, or answer the user's travel question specifically about visiting India.
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error('Gemini API Error:', err);
    throw err;
  }
};
