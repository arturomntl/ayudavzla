import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ImageFrame from '@/components/ImageFrame';
import NavBar from '@/components/NavBar';
import HoverableText from '@/components/HoverableText';
import translations from '@/lib/translations';
import Link from 'next/link';
import { GeistMono } from "geist/font/mono";

export default function Home() {
  const [language, setLanguage] = useState('es');
  const headerRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const linkRefs = useRef<(HTMLSpanElement | HTMLParagraphElement)[]>([]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'es' : 'en'));
  };

  const t = translations[language];

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(headerRef.current, { opacity: 0, filter: 'blur(5px)' }, { opacity: 1, filter: 'blur(0px)', duration: 2 });
    }

    if (pRef.current) {
      gsap.fromTo(pRef.current, { opacity: 0, filter: 'blur(5px)' }, { opacity: 1, filter: 'blur(0px)', duration: 2, delay: 0.3 });
    }

    linkRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(ref, { opacity: 0, filter: 'blur(5px)' }, { opacity: 1, filter: 'blur(0px)', duration: 2, delay: 1.5 + index * 0.3 });
      }
    });
  }, [language]);

  return (
    <main id="mainPage" className={`min-h-screen px-4 flex flex-col w-full ${GeistMono.className}`}>
      <NavBar t={t} language={language} toggleLanguage={toggleLanguage} />
      <div id="parent" className="flex flex-col lg:flex-row h-screen">
        <div className="flex-1 basis-3/5 p-4 text-left flex flex-col gap-32 xs:gap-12 lg:gap-8 xl:gap-8">
          <h1 ref={headerRef} className="w-max text-3xl xs:text-2xl xl:text-5xl lg:text-5xl">{t.HEADER}</h1>
          <p ref={pRef} className="w-full lg:w-2/3 text-base xs:text-sm lg:text-base">
            {t.PARAGRAPH}
          </p>
          <div className="flex flex-col gap-4 xs:text-sm lg:text-base">
            <Link href="/ayudar" ref={el => linkRefs.current[0] = el as HTMLSpanElement}>
              <HoverableText t={t.COMPONENT} />
            </Link>
            <Link href="/otros" ref={el => linkRefs.current[1] = el as HTMLSpanElement}>
              <HoverableText t={t.OPTION} />
            </Link>
            <p ref={el => linkRefs.current[2] = el} className="bottom-0 text-xs lg:text-sm text-neutral-400 lg:w-2/3">
              {t.FOOTER}
            </p>
          </div>
        </div>
        <div className="flex-1 lg:basis-2/5 aspect-video relative lg:static">
          <ImageFrame />
        </div>
      </div>
    </main>
  );
}
