import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  // Here you would typically save the user to the database
  // But for now, we'll just simulate a successful response

  if (!name || !email || !password) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
  }

  // Simulate a success response
  return NextResponse.json({ message: 'User registered successfully!' }, { status: 200 });
}
