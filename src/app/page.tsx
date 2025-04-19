"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SimpleButton from './components/SimpleButton';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="min-h-screen flex flex-col items-center justify-center relative z-20">
        <a href="https://www.prisma.events" target="_blank" rel="noopener noreferrer">
          <Image 
              src="/prisma-name-text-dark.svg" 
              alt="Prisma Events Logo" 
              className="h-16 w-auto mb-12" 
              width={1191.1931} // Specify width
              height={270.17273} // Specify height
          />
        </a>
        <div className="flex flex-wrap items-center gap-4">
          <SimpleButton redirectTo='/register' buttonText='Register'/>
          <SimpleButton redirectTo='#' buttonText='Log in'/>
        </div>
      </div>
    </div>
  );
}
