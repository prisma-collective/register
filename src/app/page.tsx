"use client";

import { useRouter } from 'next/navigation';
import './styles/style.css'; 

const stakeholderTypes = [
  { name: 'Participants', id: '3NB7ON', description: 'Individuals', image: './card-participant.svg' },
  { name: 'Communities of Place', id: 'w4NK1O', description: 'Bioregional hubs & locals', image: './card-copl.svg' },
  { name: 'Communities of Practice', id: 'n9J7rK', description: 'Network representatives', image: './card-copr.svg' },
  { name: 'Partners', id: 'wQB7El', description: 'Technologies, funders, institutions', image: './card-partners.svg' },
];

export default function Home() {
  const router = useRouter(); // Initialise the router

  const handleCardClick = (id: string) => {
    router.push(`/register?type=${id}`); // Navigate to register page, loading tally form based on type id
  }

  return (
    <div className="min-h-screen relative pt-5 pb-5">
      <div className="mesh-gradient absolute inset-0 z-10" /> 
      <div className="min-h-screen flex flex-col items-center justify-center relative z-20">
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
                onClick={() => handleCardClick(type.id)} // Call handleCardClick on click
                className="relative bg-gray-800 bg-opacity-40 rounded-xl border border-gray-600 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col transform transition-transform hover:scale-105"
              >
                <img
                  src={type.image}
                  alt={type.name}
                  className="h-50 w-full object-cover mb-0"
                />
                <div className="h-0.5 bg-white bg-opacity-30" />
                <div className="absolute inset-0 bg-gray-600 bg-opacity-15 z-10" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-2 z-20 relative truncate">{type.name}</h2>
                  <p className="text-gray-300 mb-4 truncate">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
