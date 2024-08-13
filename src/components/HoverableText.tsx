import React, { useState } from 'react';

function HoverableText({ children, t }: { children?: React.ReactNode; t: string | JSX.Element }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-2 hover:underline active:text-red-500"
    >
      {children || t}
      {isHovered && ' <-'}
    </div>
  );
}

export default HoverableText;
