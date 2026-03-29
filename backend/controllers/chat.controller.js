import { generateChatResponse } from '../services/gemini.service.js';
import { scrapeTourismData } from '../services/scraper.service.js';
import ChatData from '../models/chat.model.js';
import mongoose from 'mongoose';

export const handleQuery = async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) return res.status(400).json({ error: 'Query is required.' });

    // Step 1: Attempt to scrape or fetch contextual info
    const context = await scrapeTourismData(query);

    // Step 2: Use Gemini to generate a response
    const botResponse = await generateChatResponse(query, context);

    // Step 3: Save to DB (if DB is connected)
    try {
      if (mongoose.connection.readyState === 1) { // 1 = connected
        await ChatData.create({ query, response: botResponse });
      }
    } catch (dbErr) {
       console.error("Failed to save to DB:", dbErr);
    }

    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error handling query:', error);
    res.status(500).json({ error: 'Internal server error while processing query.' });
  }
};
