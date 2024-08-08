import React, { useState } from 'react';

function HoverableText({ children, t }: { children: React.ReactNode; t: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-2 hover:underline active:text-red-500"
    >
      {t}
      {isHovered && ' <-'}
    </div>
  );
}

export default HoverableText;

