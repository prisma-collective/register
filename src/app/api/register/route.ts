import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("fullName")?.toString() || '';
  const email = formData.get("email")?.toString() || '';
  const password = formData.get("password")?.toString() || '';
  const audioBlob = formData.get("audio");

  // Here you would typically save the user to the database
  // But for now, we'll just simulate a successful response

  if (!name || !email || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  // Send notification to Telegram (assuming you're doing it here)
  // Here you can also implement the Telegram bot logic
  try {
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    const message = `New registration:\nName: ${name}\nEmail: ${email}`;
    const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
      }),
    });

    if (!telegramResponse.ok) {
      throw new Error('Failed to send message to Telegram');
    }
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return NextResponse.json({ message: 'User registered successfully, but failed to notify Telegram.' }, { status: 200 });
  }

  // Simulate a success response
  return NextResponse.json({ message: 'User registered successfully!' }, { status: 200 });
}
