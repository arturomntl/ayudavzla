// components/NavBar.tsx
import React from 'react';
import Link from 'next/link';
import HoverableText from '@/components/HoverableText';

interface NavBarProps {
  t: any; // Translation object passed from the page
  language: string;
  toggleLanguage: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ t, language, toggleLanguage }) => {
  return (
    <div
      id="navBar"
      className="justify-between sticky top-0 z-10 flex flex-row text-base px-4 pb-8 py-2 items-center"
    >
      <Link href="/" className="hover:underline">{t.NAV_BAR}</Link>
      <button
        id="toggleLANG"
        onClick={toggleLanguage}
        className="text-white active:text-red-500 lg:text-lg"
      >
        <HoverableText t={t.BUTTON} />
      </button>
    </div>
  );
};

export default NavBar;
