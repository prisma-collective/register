"use client";

import RegistrationForm from './RegistrationForm'; // Import the form component

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Logo centered above the form */}
      <a href="https://prisma.events" target="_blank" rel="noopener noreferrer" className="mb-6">
        <img 
          src="/logo_colour.svg" 
          alt="Prisma Events" 
          className="h-16 w-auto animate-spin-slow" 
        />
      </a>

      {/* Registration Form */}
      <div className="w-full max-w-lg">
        <RegistrationForm />
      </div>
    </div>
  );
}
