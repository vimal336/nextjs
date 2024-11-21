import axios from 'axios';

export default async function handler(req, res) {
  const { chatId, message } = req.body;

  if (!chatId || !message) {
    return res.status(400).json({ error: 'Chat ID and message are required.' });
  }

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: chatId,
        text: message,
      }
    );
    res.status(200).json({ success: true, data: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
}
