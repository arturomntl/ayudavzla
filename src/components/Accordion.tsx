import React, { useRef, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import gsap from 'gsap';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.fromTo(
          contentRef.current,
          { height: 0, opacity: 0, filter: 'blur(10px)' },
          {
            height: 'auto',
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.5,
            ease: 'power2.out',
          }
        );
      } else {
        gsap.fromTo(
          contentRef.current,
          { height: contentRef.current.scrollHeight, opacity: 1, filter: 'blur(0px)' },
          {
            height: 0,
            opacity: 0,
            filter: 'blur(10px)',
            duration: 0.5,
            ease: 'power2.out',
          }
        );
      }
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-4 text-left hover:bg-neutral-800"
      >
        <span className="font-medium text-base text-left">{title}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
      <div ref={contentRef} style={{ overflow: 'hidden' }}>
        <div className="text-left p-4">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
