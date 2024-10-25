"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h1 className="text-4xl font-bold text-black-700 mb-4">Registration Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for registering as a {type}. Your account has been created successfully.
      </p>
    </div>
  );
}
