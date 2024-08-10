// src/components/NavBar.tsx

import React from 'react';
import Link from 'next/link';
import HoverableText from '@/components/HoverableText';

interface NavBarProps {
  t: any; // Translation object passed from the page
  toggleLanguage: () => void; // Function to toggle language
  language: 'en' | 'es'; // Language state passed from the page
}

const NavBar: React.FC<NavBarProps> = ({ t, toggleLanguage, language }) => {
  return (
    <div className="flex justify-between items-center p-4 text-white">
      <Link href="/" className='hover:underline'>
        {t.NAV_BAR}
      </Link>
      <button
        id="toggleLANG"
        onClick={toggleLanguage} // Attach the toggleLanguage function to onClick
        className="text-white active:text-red-500 lg:text-lg"
      >
        <HoverableText t={t.BUTTON} />
      </button>
    </div>
  );
};

export default NavBar;
