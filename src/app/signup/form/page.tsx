"use client";

import { Suspense } from 'react';
import RegistrationForm from './RegistrationForm';
import { useSearchParams } from 'next/navigation';

export default function FormEmbed() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterContent />
    </Suspense>
  );
}

function RegisterContent() {
  const searchParams = useSearchParams();
  const formID = searchParams.get('type') || 'default';

  return (
    <div className="min-h-screen w-full">
      <RegistrationForm formID={formID} />
    </div>
  );
}
