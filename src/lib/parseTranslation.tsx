import React from 'react';
import Link from 'next/link';
import translationsAyudar from '@/lib/translationsAyudar';

const parseTranslation = (text: string): JSX.Element => {
  // Create an array of JSX elements for the replacement parts
  const replacements: { [key: string]: JSX.Element } = {
    'Follow this account on IG & repost their media.': (
      <Link href="https://www.instagram.com/noticiasvenezueladice/" target="_blank" rel="noopener noreferrer" key="cta1">
        Follow this account on IG & repost their media.
      </Link>
    ),
    'Want to take a look at the orgs? Click Here.': (
      <Link href="/thelist" key="cta2">
        Want to take a look at the orgs? Click Here.
      </Link>
    ),
    'Start by signing this petition we found.': (
      <Link href="https://www.change.org/p/united-nations-expel-maduro-from-the-human-rights-council" target="_blank" rel="noopener noreferrer" key="cta3">
        Start by signing this petition we found.
      </Link>
    ),
    'Sigue esta cuenta en IG y comparte su contenido.': (
      <Link href="https://www.instagram.com/noticiasvenezueladice/" target="_blank" rel="noopener noreferrer" key="cta4">
        Sigue esta cuenta en IG y comparte su contenido.
      </Link>
    ),
    'Quieres ver las orgs? Haz clic aquí.': (
      <Link href="/thelist" key="cta5">
        Quieres ver las orgs? Haz clic aquí.
      </Link>
    ),
    'Empieza con esta peticion.': (
      <Link href="https://www.change.org/p/united-nations-expel-maduro-from-the-human-rights-council" target="_blank" rel="noopener noreferrer" key="cta6">
        Empieza con esta peticion.
      </Link>
    ),
  };

  // Split the text into parts where replacements are needed
  const parts = text.split(/(\[object Object\])/g);

  return (
    <>
      {parts.map((part, index) => {
        // Check if the part is in replacements
        if (replacements[part]) {
          return <React.Fragment key={index}>{replacements[part]}</React.Fragment>;
        } else {
          return <React.Fragment key={index}>{part}</React.Fragment>;
        }
      })}
    </>
  );
};

export default parseTranslation;
