"use client";

import RegistrationForm from './RegistrationForm';
import { useSearchParams } from 'next/navigation';

export default function Register() {
  const searchParams = useSearchParams();
  const formID = searchParams.get('type') || 'default';

  return (
    <div className="min-h-screen w-full">
      <RegistrationForm 
        formID={formID}
      />
    </div>
  );
}
