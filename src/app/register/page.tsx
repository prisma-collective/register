"use client";

import RegistrationForm from './RegistrationForm';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stakeholderType = searchParams.get('type') || 'default';

  const handleBack = () => {
    router.push('/');
  };
  return (
    <div className="min-h-screen w-full">
      <RegistrationForm 
        stakeholderType={stakeholderType}
        onBack={handleBack}
      />
    </div>
  );
}
