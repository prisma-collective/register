"use client";

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

interface RegistrationFormProps {
  formID: string;
}

export default function RegistrationForm({ formID }: RegistrationFormProps) {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  });

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        }}
      />
      <iframe
        data-tally-src={`https://tally.so/r/${formID}`}
        width="100%"
        height="100%"
        style={{ border: 'none', minHeight: '100vh' }}
      ></iframe>
    </div>
  );
}
