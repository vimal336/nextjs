import crypto from 'crypto';

export default async function handler(req, res) {
  const { query } = req;

  const { id, hash, ...data } = query; // Extract the user data
  const secretKey = crypto
    .createHash('sha256')
    .update(process.env.TELEGRAM_BOT_TOKEN)
    .digest(); // Replace with your bot token

  const dataCheckString = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join('\n');

  const hmac = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');

  if (hmac !== hash) {
    return res.status(403).json({ message: 'Invalid data from Telegram.' });
  }

  // Store user data (e.g., in a database)
  const user = {
    id, // Chat ID
    first_name: data.first_name,
    username: data.username,
  };

  console.log('Logged-in user:', user);

  // Respond to the client
  res.status(200).json({ message: 'Login successful!', user });
}
