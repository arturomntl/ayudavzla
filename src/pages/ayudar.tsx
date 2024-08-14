// src/pages/ayudar.tsx

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ImageFrame from '@/components/ImageFrame';
import NavBar from '@/components/NavBar';
import Link from 'next/link';
import HoverableText from '@/components/HoverableText';
import translationsAyudar from '@/lib/translationsAyudar';
import parseTranslation from '@/lib/parseTranslation';
import { GeistMono } from "geist/font/mono";
import { TranslationsMap } from '@/lib/typesAyudar'; // Use the specific type

gsap.registerPlugin(ScrollTrigger);

export default function AyudarPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  const headerRef = useRef<HTMLHeadingElement>(null);
  const pRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = (translationsAyudar as TranslationsMap)[language];

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    pRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, filter: 'blur(10px)' },
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: 1.5,
            delay: index * 0.3,
            scrollTrigger: {
              trigger: ref,
              start: 'top 90%',
            }
          }
        );
      }
    });
  }, [language]);

  return (
    <>
      <Head>
        <title>HELP VZLA - HOW TO HELP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Learn how you can help Venezuela from the U.S." />
        <meta property="og:title" content="HELP VZLA - How to Help" />
        <meta property="og:description" content="Learn how you can help Venezuela from the U.S." />
        <meta property="og:image" content="/VzlaFlag.png" />
        <meta property="og:url" content="https://ayudavzla.com/ayudar" />
        <meta name="twitter:card" content="/VZLATwitterCard.png" />
        <meta name="twitter:title" content="Help Venezuela - How to Help" />
        <meta name="twitter:description" content="Learn how you can help Venezuela from the U.S." />
        <meta name="twitter:image" content="/VzlaFlag.png" />
      </Head>
      <main className={`relative min-h-screen px-4 flex flex-col w-full ${GeistMono.className}`}>
        <NavBar t={t} language={language} toggleLanguage={toggleLanguage} />

        <div id="parent" className="absolute inset-0 flex flex-col lg:flex-row z-20 pt-8">
          <div className="flex-1 basis-3/5 p-4 text-left flex flex-col gap-32 xs:gap-12 lg:gap-8 xl:gap-8">
            <h1 id="ayuHdr" ref={headerRef} className="w-full text-3xl xs:pt-10 sm:pt-8 md:pt-8 lg:pt-8 crcs:text-35xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-10xl whitespace-pre-wrap">
              {t.HEADER.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <div id="oneThruThree" className='flex flex-col gap-14'>
              <div id="numOne" className='flex flex-col gap-4 w-full xs:w-100 md:w-1/3 lg:w-1/3 text-base xs:text-sm lg:text-base'>
                <p ref={el => { pRefs.current[0] = el; }}>{t.Num1HEADER}</p>
                <p ref={el => { pRefs.current[1] = el; }}>{t.Num1PARAGRAPH}</p>
                <HoverableText t={parseTranslation(t.Num1CTA) as unknown as string} />
              </div>
              
              <div id="numTwo" className='flex flex-col gap-4 w-full xs:w-100 md:w-1/3 lg:w-1/3 text-base xs:text-sm lg:text-base'>
                <p ref={el => { pRefs.current[2] = el; }}>{t.Num2HEADER}</p>
                <p ref={el => { pRefs.current[3] = el; }}>{t.Num2PARAGRAPH}</p>
                <HoverableText t={parseTranslation(t.Num2CTA) as unknown as string} />
              </div>
              
              <div id="numThree" className='flex flex-col gap-4 w-full xs:w-100 md:w-1/3 lg:w-1/3 text-base xs:text-sm lg:text-base'>
                <p ref={el => { pRefs.current[4] = el; }}>{t.Num3HEADER}</p>
                <p ref={el => { pRefs.current[5] = el; }}>{t.Num3PARAGRAPH}</p>
                <HoverableText t={parseTranslation(t.Num3CTA) as unknown as string} />
              </div>
            </div>

            <div className="flex flex-col gap-4 xs:text-sm lg:text-base">
              <Link href="/"><HoverableText t={t.COMPONENT} /></Link>
              <Link href="/otros"><HoverableText t={t.OPTION} /></Link>
            </div>

            <footer className="bottom-0 text-xs lg:text-sm text-neutral-400 lg:w-2/3 bg-black bg-opacity-50 backdrop-blur-md rounded">
              {t.FOOTER}
            </footer>
          </div>
        </div>

        <div>
          <ImageFrame />
        </div>
      </main>
    </>
  );
}