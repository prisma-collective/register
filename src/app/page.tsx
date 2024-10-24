"use client";

import { useState } from 'react';
import RegistrationForm from './register/RegistrationForm';
import './styles/style.css'; // Adjust the path as necessary

const stakeholderTypes = [
  { name: 'Participants', id: 'participants', description: 'Individuals', image: 'url' },
  { name: 'Communities of Place', id: 'copl', description: 'Bioregional hubs & locals', image: 'url' },
  { name: 'Communities of Practice', id: 'copr', description: 'Network representatives', image: 'url' },
  { name: 'Partners', id: 'tech-partners', description: 'Technologies, funders, institutions', image: 'url' },
];

export default function Home() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* Background mesh gradient */}
      <div className="mesh-gradient absolute inset-0 z-10" /> 
      {/* Solid background color layer */}
      <div className="min-h-screen flex flex-col items-center justify-center relative z-20">
        {!selectedType ? (
          <>
            <a href="https://prisma.events" target="_blank" rel="noopener noreferrer" className="mb-6">
              <img 
                src="/logo_colour.svg" 
                alt="Prisma Events" 
                className="h-16 w-auto animate-spin-slow" 
              />
            </a>
            <div className="container mx-auto px-16">
              <h1 className="text-4xl font-bold mb-8 text-center text-white">Choose Your Registration Path</h1>
            </div>
            <div className="container mx-auto px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stakeholderTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer flex flex-col transform transition-transform hover:scale-105"
                  >
                    <img
                      src={type.image} // Assuming 'type.image' contains the URL/ path of the image
                      alt={type.name}
                      className="h-40 w-full object-cover mb-4"
                    />
                    <h2 className="text-2xl font-semibold text-black mb-2 truncate">{type.name}</h2>
                    <p className="text-gray-600 mb-4 truncate">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <RegistrationForm stakeholderType={selectedType} onBack={() => setSelectedType(null)} />
        )}
      </div>
    </div>
  );
}
