
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, delay = 'duration-500' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      className={`transition-all ease-in-out ${delay} ${className} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};
