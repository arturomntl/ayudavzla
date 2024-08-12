// src/pages/otros.tsx

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import HoverableText from '@/components/HoverableText';
import Accordion from '@/components/Accordion';
import translationsOtros from '@/lib/translationsOtros';
import { GeistMono } from "geist/font/mono";
import Link from 'next/link';
import { TranslationsMap } from '@/lib/typesOtros'; // Use the specific type

gsap.registerPlugin();

export default function Otros() {
  const [language, setLanguage] = useState<'en' | 'es'>('es');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const headerRef = useRef<HTMLHeadingElement>(null);
  const accordionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const footerRef = useRef<HTMLParagraphElement>(null); // Reference for footer

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = (translationsOtros as TranslationsMap)[language];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, filter: 'blur(10px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2,
          ease: 'power2.out',
        }
      );
    }

    accordionRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, filter: 'blur(10px)', y: 50 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 1.5,
            delay: index * 0.3,
            ease: 'power2.out',
          }
        );
      }
    });

    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, filter: 'blur(5px)' },
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 2,
          ease: 'power2.out',
          delay: 1.5, // Adjust delay to match your timing preferences
        }
      );
    }
  }, [language]);

  return (
    <>
      <Head>
        <title>HELP VZLA - OTHER RESOURCES</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Find other resources to help Venezuela." />
        <meta property="og:title" content="HELP VZLA - Other Resources" />
        <meta property="og:description" content="Find other resources to help Venezuela." />
        <meta property="og:image" content="/VzlaFlag.png" />
        <meta property="og:url" content="https://ayudavzla.com/otros" />
        <meta name="twitter:card" content="/VZLATwitterCard.png" />
        <meta name="twitter:title" content="Help Venezuela - Other Resources" />
        <meta name="twitter:description" content="Find other resources to help Venezuela." />
        <meta name="twitter:image" content="/VzlaFlag.png" />
      </Head>
      <main id="mainPage" className={`min-h-screen px-4 xs:p-0 flex flex-col w-full ${GeistMono.className}`}>
        <div id="navBar" className="justify-between sticky top-0 z-10 flex flex-row text-base px-8 pb-8 py-2 items-center">
          <Link href="/" className='hover:underline'>
            {t.NAV_BAR}
          </Link>
          <button
            id="toggleLANG"
            onClick={toggleLanguage}
            className="text-white active:text-red-500 lg:text-lg"
          >
            <HoverableText t={t.BUTTON}/>
          </button>
        </div>

        <div className='container mx-auto p-4'>
          <h1 ref={headerRef} className='w-max text-3xl xs:text-2xl sm:text-4xl md:text-5xl xl:text-8xl lg:text-5xl mx-auto text-center p-4'>
            {t.PAGETITLE}
          </h1>
          <div className="container mx-auto p-4">
            {[
              { title: t.RES1_TITLE, content: t.RES1_CONTENT },
              { title: t.RES2_TITLE, content: t.RES2_CONTENT },
              { title: t.RES3_TITLE, content: t.RES3_CONTENT },
              { title: t.RES4_TITLE, content: t.RES4_CONTENT },
              { title: t.RES5_TITLE, content: t.RES5_CONTENT },
              { title: t.RES6_TITLE, content: t.RES6_CONTENT },
              { title: t.RES7_TITLE, content: t.RES7_CONTENT },
              { title: t.RES8_TITLE, content: t.RES8_CONTENT },
            ].map((item, index) => (
              <div key={index} ref={el => { if (el) accordionRefs.current[index] = el; }}>
                <Accordion
                  title={item.title}
                  content={<p>{item.content}</p>}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='py-4 px-8'>
          <p ref={footerRef} className="bottom-0 text-xs lg:text-sm text-neutral-400 lg:w-2/3">
            {t.FOOTER}
          </p>
        </div>
      </main>
    </>
  );
}
