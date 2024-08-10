// src/pages/ayudar.tsx

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ImageFrame from '@/components/ImageFrame';
import Link from 'next/link';
import HoverableText from '@/components/HoverableText';
import translationsAyudar from '@/lib/translationsAyudar';
import parseTranslation from '@/lib/parseTranslation';
import { GeistMono } from "geist/font/mono";

gsap.registerPlugin(ScrollTrigger);

export default function AyudarPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');

  const headerRef = useRef<HTMLHeadingElement>(null);
  const pRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = translationsAyudar[language];

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
    <main className={`relative min-h-screen px-4 flex flex-col w-full ${GeistMono.className}`}>
      <div id="navBar" className="justify-between sticky top-0 z-30 flex flex-row text-base px-4 pb-8 py-2 items-center">
        <Link href="/" className='hover:underline'>
          {t.NAV_BAR}
        </Link>

        <button
          id="toggleLANG"
          onClick={toggleLanguage}
          className="text-white active:text-red-500 lg:text-lg"
        >
          <HoverableText t={t.BUTTON} />
        </button>
      </div>

      <div id="parent" className="absolute inset-0 flex flex-col lg:flex-row z-20 pt-8">
        <div className="flex-1 basis-3/5 p-4 text-left flex flex-col gap-32 xs:gap-12 lg:gap-8 xl:gap-8">
          <h1 ref={headerRef} className="w-max text-3xl xs:pt-10 sm:pt-8 md:pt-8 lg:pt-8 xs:text-7xl md:text-9xl lg:text-10xl xl:text-10xl whitespace-pre-wrap">
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

          <footer className="bottom-0 text-xs lg:text-sm text-neutral-400 lg:w-2/3">
            {t.FOOTER}
          </footer>
        </div>
      </div>

      <div className="relative z-10 flex-1 lg:basis-2/5 aspect-video">
        <ImageFrame />
      </div>
    </main>
  );
}
