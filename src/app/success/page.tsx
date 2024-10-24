// src/app/success/page.tsx

import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-4xl font-bold text-black-700 mb-4">Registration Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">Thank you for registering. Your account has been created successfully.</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Go to Home
      </Link>
    </div>
  );
}
