// src/pages/theList.tsx

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import ImageFrame from '@/components/ImageFrame';
import Link from 'next/link';
import HoverableText from '@/components/HoverableText';
import translations from '@/lib/translationList';
import { GeistMono } from "geist/font/mono";
import gsap from 'gsap';
import { TranslationsMap } from '@/lib/typesList'; // Use the specific type

export default function List() {
  const [language, setLanguage] = React.useState<'en' | 'es'>('es');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = (translations as TranslationsMap)[language];

  const headerRef = useRef<HTMLHeadingElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]); // Type the linkRefs array

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, filter: 'blur(10px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
      );
    }

    linkRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, filter: 'blur(10px)' },
          { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out', delay: index * 0.3 }
        );
      }
    });
  }, [language]);

  return (
    <>
      <Head>
        <title>HELP VZLA - Organizations</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Find organizations to support Venezuela." />
        <meta property="og:title" content="HELP VZLA - Organizations" />
        <meta property="og:description" content="Find organizations to support Venezuela." />
        <meta property="og:image" content="/VzlaFlag.png" />
        <meta property="og:url" content="https://ayudavzla.com/thelist" />
        <meta name="twitter:card" content="/VZLATwitterCard.png" />
        <meta name="twitter:title" content="Help Venezuela - Organizations" />
        <meta name="twitter:description" content="Find organizations to support Venezuela." />
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
            <HoverableText t={t.BUTTON} />
          </button>
        </div>

        <div id="parent" className="flex flex-col justify-center items-center h-screen">
          <div className="flex-1 p-4 xs:p-0 sm:p-0 flex flex-col gap-32 xs:gap-12 lg:gap-8 xl:gap-8">
            <h1 ref={headerRef} className="xs:pt-32 w-max text-3xl xs:text-2xl sm:text-4xl md:text-5xl xl:text-8xl lg:text-5xl mx-auto text-center">
              {t.HEADER}
            </h1>
            <div className="w-2/3 mx-auto flex flex-col gap-4 xs:text-sm lg:text-base">
              <Link ref={(el) => { linkRefs.current[0] = el; }} target="_blank" rel="noopener noreferrer" href="https://www.usaid.gov/humanitarian-assistance/venezuela-regional">
                <HoverableText t={t.L1} />
              </Link>
              <Link ref={(el) => { linkRefs.current[1] = el; }} target="_blank" rel="noopener noreferrer" href="https://vianyc.org/">
                <HoverableText t={t.L2} />
              </Link>
              <Link ref={(el) => { linkRefs.current[2] = el; }} target="_blank" rel="noopener noreferrer" href="https://www.caritas.org/where-caritas-work/latin-america/venezuela/">
                <HoverableText t={t.L3} />
              </Link>
              <Link ref={(el) => { linkRefs.current[3] = el; }} target="_blank" rel="noopener noreferrer" href="https://www.caritas.org/where-caritas-work/latin-america/venezuela/">
                <HoverableText t={t.L4} />
              </Link>
              <div className="flex flex-col mt-16 gap-4 xs:text-sm lg:text-base">
                <Link ref={(el) => { linkRefs.current[4] = el; }} href="/ayudar">
                  <HoverableText t={t.COMPONENT} />
                </Link>
                <Link ref={(el) => { linkRefs.current[5] = el; }} href="/">
                  <HoverableText t={t.OPTION} />
                </Link>
                <p className="bottom-0 text-xs lg:text-sm text-neutral-400">
                  {t.FOOTER}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
