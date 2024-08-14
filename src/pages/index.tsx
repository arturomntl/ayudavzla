// src/pages/index.tsx

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import ImageFrame from '@/components/ImageFrame';
import NavBar from '@/components/NavBar';
import HoverableText from '@/components/HoverableText';
import translations from '@/lib/translations';
import Link from 'next/link';
import { GeistMono } from "geist/font/mono";
import { TranslationsMap } from '@/lib/typesIndex'; // Use the specific type

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'es'>('es'); // Strictly type the language
  const headerRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = (translations as TranslationsMap)[language]; // Explicitly type translations

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, { opacity: 0, filter: 'blur(5px)' }, { opacity: 1, filter: 'blur(0px)', duration: 2 });
    }

    if (pRef.current) {
      gsap.fromTo(pRef.current, { opacity: 0, filter: 'blur(5px)' }, { opacity: 1, filter: 'blur(0px)', duration: 2, delay: 0.3 });
    }
  }, [language]);

  return (
    <>
      <Head>
        <title>HELP VZLA - HOME</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Help Venezuela from the U.S. Find resources and ways to support Venezuela." />
        <meta property="og:title" content="HELP VZLA - Home" />
        <meta property="og:description" content="Help Venezuela from the U.S. Find resources and ways to support Venezuela." />
        <meta property="og:image" content="/VzlaFlag.png" />
        <meta property="og:url" content="https://ayudavzla.com" />
        <meta name="twitter:card" content="/VZLATwitterCard.png" />
        <meta name="twitter:title" content="Help Venezuela - Home" />
        <meta name="twitter:description" content="Help Venezuela from the U.S. Find resources and ways to support Venezuela." />
        <meta name="twitter:image" content="/VzlaFlag.png" />
      </Head>
      <main id="mainPage" className={`min-h-screen px-4 flex flex-col w-full ${GeistMono.className}`}>
        <NavBar t={t} language={language} toggleLanguage={toggleLanguage} />
        <div id="parent" className="flex flex-col lg:flex-row h-screen">
          <div className="flex-1 basis-3/5 px-4 text-left flex flex-col gap-32 xs:gap-12 lg:gap-8 xl:gap-8">
            <h1 ref={headerRef} className="w-full text-3xl xs:text-2xl xl:text-5xl lg:text-5xl">{t.HEADER}</h1>
            <p ref={pRef} className="w-full lg:w-2/3 text-base xs:text-sm lg:text-base">
              {t.PARAGRAPH}
            </p>
            <div className="flex flex-col gap-4 xs:text-sm lg:text-base">
              <Link href="/timeline" passHref>
                <HoverableText t={t.TIMELINE} />
              </Link>
              <Link href="/ayudar" passHref>
                <HoverableText t={t.COMPONENT} />
              </Link>
              <Link href="/otros" passHref>
                <HoverableText t={t.OPTION} />
              </Link>
              <p className="bottom-0 text-xs lg:text-sm text-neutral-400 lg:w-2/3 bg-black bg-opacity-50 backdrop-blur-md rounded">
                {t.FOOTER}
              </p>

            </div>
          </div>
          <div className="flex-1 lg:basis-2/5 aspect-video relative lg:static">
            <ImageFrame />
          </div>
        </div>
      </main>
    </>
  );
}
