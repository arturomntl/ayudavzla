// src/pages/404.tsx

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { gsap } from 'gsap';
import NavBar from '@/components/NavBar';
import { GeistMono } from "geist/font/mono";
import translations404 from '@/lib/translations404';
import { Translations404Map } from '@/lib/types404';
import HoverableText from '@/components/HoverableText';

const Custom404 = () => {
  const [language, setLanguage] = React.useState<'en' | 'es'>('es');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = (translations404 as Translations404Map)[language];

  const headerRef = useRef<HTMLHeadingElement>(null);
  const linkRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
    }
    linkRefs.current.forEach((link, index) => {
      if (link) {
        gsap.fromTo(link, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 1 + index * 0.3 });
      }
    });
  }, [language]);

  return (
    <>
      <Head>
        <title>HELP VZLA - Page Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Page not found. Get back to helping Venezuela." />
        <meta property="og:title" content="HELP VZLA - Page Not Found" />
        <meta property="og:description" content="Page not found. Get back to helping Venezuela." />
        <meta property="og:image" content="/VzlaFlag.png" />
        <meta property="og:url" content="https://ayudavzla.com/404" />
        <meta name="twitter:card" content="/VZLATwitterCard.png" />
        <meta name="twitter:title" content="HELP VZLA - Page Not Found" />
        <meta name="twitter:description" content="Page not found. Get back to helping Venezuela." />
        <meta name="twitter:image" content="/VzlaFlag.png" />
      </Head>
      <main id="404Page" className={`min-h-screen px-4 flex flex-col w-full ${GeistMono.className}`}>
        <NavBar t={t} language={language} toggleLanguage={toggleLanguage} />
        <div className='flex-1 md:w-3/5 lg:w-3/5 xl:w-3/5 p-4 text-left flex flex-col gap-32 xs:gap-24 lg:gap-8 xl:gap-16'>
          <h1 ref={headerRef} className="text-xl lg:text-4xl">{t.HEADER}</h1>
          <div className="flex flex-col items-left gap-4">
            <Link href="/" passHref>
              <HoverableText t={t.HOME_PAGE} />
            </Link>
            <Link href="/ayudar" passHref>
              <HoverableText t={t.HOW_TO_HELP} />
            </Link>
            <Link href="/otros" passHref>
              <HoverableText t={t.OTHER_RESOURCES} />
            </Link>
            <Link href="/theList" passHref>
              <HoverableText t={t.ORG_LIST} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center sm:absolute sm:bottom-10 sm:right-10 lg:absolute lg:bottom-10 lg:right-10 text-center xs:mx-auto xs:items-center xs:relative">
          <div>
            <p className='text-neutral-400 xs:text-10xl lg:text-11xl text-center relative z-[-20] inset-0'>404</p>
          </div>
          <div className='z-10 xs:text-6xl md:text-7xl lg:text-8xl tracking-widest leading-none xs:justify-center xs:items-center'>
            <h1>ERROR PAGE</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default Custom404;
