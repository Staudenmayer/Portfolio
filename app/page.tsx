"use client";

import { FigmaToolbar } from '@/components/FigmaToolbar'
import { HeroFrame } from '@/components/HeroFrame';
import { AboutFrame } from '@/components/AboutFrame'
import { KnowledgeFrame } from '@/components/KnowledgeFrame'
import { TechnologiesFrame } from '@/components/TechnologiesFrame'
import { CVFrame } from '@/components/CVFrame'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 relative">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <FigmaToolbar />
          <br />
          <HeroFrame />
          <AboutFrame />
          <KnowledgeFrame />
          <TechnologiesFrame />
          <CVFrame />
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

        </footer>
      </div>
    </div>
  );
}
