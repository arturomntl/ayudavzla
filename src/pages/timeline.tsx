// src/pages/timeline.tsx

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import NavBar from '@/components/NavBar';
import translationsTimeline from '@/lib/translationsTimeline';
import { TranslationsMapTimeline } from '@/lib/typesTimeline';
import { GeistMono } from "geist/font/mono";

const Timeline: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const t = (translationsTimeline as TranslationsMapTimeline)[language];

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };

  useEffect(() => {
    if (itemsRef.current.length) {
      itemsRef.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(
            el,
            { opacity: 0, filter: 'blur(10px)' },
            {
              opacity: 1,
              filter: 'blur(0px)',
              duration: 1,
              ease: 'power2.out',
              delay: index * 0.3
            }
          );
        }
      });
    }
  }, [language]);

  return (
    <>
      <Head>
        <title>Two Weeks Summary of Maduro Re-election</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={`min-h-screen bg-black text-white pb-8 px-4 ${GeistMono.className}`}>
        <NavBar t={t} language={language} toggleLanguage={toggleLanguage} />
        <div className="container mx-auto px-2">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-0.5 bg-white"></div>
            </div>
            {/* Timeline Items */}
            <div className="relative z-10 grid gap-8">
              {t.TIMELINE.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-full"
                  ref={el => {
                    itemsRef.current[index] = el;
                  }}
                >
                  <div className={`outline w-2 h-2 crcs:w-1 crcs:h-1 xs:w-1 xs:h-1 sm:w-1 sm:h-1 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full ${item.color}`}></div>
                  <div className="ml-4 p-4 bg-black text-center rounded-xl max-w-lg outline text-base xs:text-sm lg:text-base">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Timeline;
