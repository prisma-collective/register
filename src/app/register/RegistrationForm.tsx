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
  stakeholderType: string;
  onBack: () => void;
}

export default function RegistrationForm({ stakeholderType, onBack }: RegistrationFormProps) {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, [stakeholderType]);

  const formIds = {
    'participants': 'w4NK1O',
    'tech-partners': 'mZkR1O',
    'communities': 'nLkP1O',
    'local-communities': 'pQkM1O'
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <button onClick={onBack} className="mb-4 text-blue-600 hover:underline">
        ← Back to selection
      </button>
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
        data-tally-src={`https://tally.so/r/${formIds[stakeholderType as keyof typeof formIds]}?registrationType=${stakeholderType}`}
        width="100%"
        height="100%"
        title={`${stakeholderType} Registration`}
        style={{ border: 'none', minHeight: '100vh' }}
      ></iframe>
    </div>
  );
}
