import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { Language } from '../types';
import { NLFlag, ENFlag, TRFlag, PLFlag, SKFlag, DEFlag, HUFlag, FRFlag } from './icons/FlagIcons';

const languageOptions = [
  { code: Language.NL, label: 'NL', Flag: NLFlag },
  { code: Language.EN, label: 'EN', Flag: ENFlag },
  { code: Language.TR, label: 'TR', Flag: TRFlag },
  { code: Language.PL, label: 'PL', Flag: PLFlag },
  { code: Language.SK, label: 'SK', Flag: SKFlag },
  { code: Language.DE, label: 'DE', Flag: DEFlag },
  { code: Language.HU, label: 'HU', Flag: HUFlag },
  { code: Language.FR, label: 'FR', Flag: FRFlag },
];

export const LanguageSwitcher: React.FC<{ direction?: 'up' | 'down' }> = ({ direction = 'down' }) => {
  const { language, setLanguage } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = languageOptions.find(opt => opt.code === language) || languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dropdownPositionClasses = direction === 'up'
    ? 'bottom-full mb-2'
    : 'mt-2';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-black/5 dark:bg-black/20 backdrop-blur-sm rounded-md border border-slate-300 dark:border-folk-blue/30 hover:bg-black/10 dark:hover:bg-black/30 transition-all duration-300 hover:ring-2 hover:ring-folk-blue/50"
      >
        <selectedLanguage.Flag className="w-6 h-auto rounded-sm" />
        <span className="font-semibold text-text-dark dark:text-text-light">{selectedLanguage.label}</span>
        <svg className={`w-4 h-4 text-text-dark dark:text-text-light transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {isOpen && (
        <div className={`absolute right-0 w-40 bg-secondary-light/80 dark:bg-secondary-dark/80 backdrop-blur-lg rounded-md shadow-lg border border-slate-300 dark:border-folk-blue/30 z-50 ${dropdownPositionClasses}`}>
          <ul className="text-text-dark dark:text-text-light max-h-60 overflow-y-auto">
            {languageOptions.map(({ code, label, Flag }) => (
              <li key={code}>
                <button
                  onClick={() => {
                    setLanguage(code);
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-folk-red/20 dark:hover:bg-folk-red/30 transition-colors duration-200"
                >
                  <Flag className="w-6 h-auto rounded-sm" />
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};