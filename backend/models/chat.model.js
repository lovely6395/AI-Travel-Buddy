import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  query: { type: String, required: true },
  response: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChatData = mongoose.model('Chat', chatSchema);
export default ChatData;
