import React from 'react';

export const GoogleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="92" height="32" viewBox="0 0 92 32">
        <path fill="#4285F4" d="M30.1 16.3c0-1.8-.2-3.6-.5-5.3H15.9v6h8.4c-.4 2-1.5 3.7-3.2 4.9v3.2h4.2c2.5-2.3 3.9-5.7 3.9-9.8z"/>
        <path fill="#34A853" d="M15.9 31.1c4.1 0 7.6-1.4 10.1-3.7l-4.2-3.2c-1.4.9-3.1 1.5-5.9 1.5-4.5 0-8.3-3-9.7-7.1h-4.3v3.3c2.8 5.6 8.3 9.2 14 9.2z"/>
        <path fill="#FBBC05" d="M6.2 18.7c-.3-.9-.5-1.9-.5-2.9s.2-2 .5-2.9V9.6H1.9C.7 11.9 0 14.4 0 17.1s.7 5.2 1.9 7.5l4.3-3.3z"/>
        <path fill="#EA4335" d="M15.9 5.1c2.2 0 4.2.8 5.8 2.3l3.7-3.7C23.5 1.4 19.9 0 15.9 0 10.2 0 4.7 3.6 1.9 9.6l4.3 3.3C7.6 8.1 11.4 5.1 15.9 5.1z"/>
    </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="12" fill="#1877F2"/>
        <path d="M16.5 9H14.5C13.9 9 13.5 9.4 13.5 10V11.5H16.5L16 14.5H13.5V21H10.5V14.5H8V11.5H10.5V9.5C10.5 7.6 11.9 6 13.5 6H16.5V9Z" fill="white"/>
    </svg>
);