import React from 'react';

export const SoupIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 10c0-2.76-2.24-5-5-5S7 7.24 7 10h10zm0 0c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3m-4 5h18M5 15h14v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2z" />
  </svg>
);
export const MainCourseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12l-1.45-1.45a5 5 0 00-7.07 0L10 12l-1.45 1.45a5 5 0 007.07 0L20 12zM4 12h16" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16" />
  </svg>
);
export const AppetizerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13V15a2 2 0 002 2h10a2 2 0 002-2v-2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);
export const DessertIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v6m0 0H8m4 0h4m-4-6a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
export const DrinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5l7 7h-14l7-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16h.01" />
  </svg>
);