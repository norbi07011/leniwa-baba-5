import React from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { FACEBOOK_URL } from '../constants';

const AnimatedFacebookButton: React.FC = () => {
    const FacebookLogo = () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M9.197 22v-9.197H6v-3.622h3.197V6.442c0-3.18 1.893-4.94 4.808-4.94 1.372 0 2.863.26 2.863.26v3.138h-1.85c-1.54 0-2.022.928-2.022 1.986v2.35h3.58l-.57 3.622h-3.01V22h-4.22z" />
        </svg>
    );

    return (
        <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-start bg-[#1877F2] text-white rounded-full h-12 w-12 hover:w-40 transition-all duration-300 ease-in-out overflow-hidden"
            aria-label="Facebook"
        >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                <FacebookLogo />
            </div>
            <span className="whitespace-nowrap font-semibold ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                Facebook
            </span>
        </a>
    );
}

export const Footer: React.FC = () => {
    const { t, theme } = useAppContext();
    const quickLinks = [
        { href: '#home', label: t('nav_home') },
        { href: '#menu', label: t('nav_menu') },
        { href: '#reviews', label: t('nav_reviews') },
        { href: '#reservation', label: t('nav_reservation') },
        { href: '#contact', label: t('nav_contact') },
    ];

    const footerBg = {
        light: 'bg-slate-100',
        dark: 'bg-secondary-dark',
    }[theme];

    return (
        <footer className={`${footerBg} text-text-dark-secondary dark:text-text-light-secondary pt-12 pb-8`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Logo & Name */}
                    <div className="flex flex-col items-center md:items-start">
                        <a href="#home" className="text-3xl font-bold text-folk-red font-serif">
                            Leniwa Baba
                        </a>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('slogan')}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-4 uppercase tracking-wider">{t('quick_links')}</h3>
                        <ul className="space-y-2">
                            {quickLinks.map(link => (
                                <li key={link.href}>
                                    <a href={link.href} className="hover:text-folk-red transition-colors duration-300 p-1 rounded-md hover:bg-white/5 dark:hover:bg-white/5">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                         <h3 className="text-lg font-semibold text-text-dark dark:text-text-light mb-4 uppercase tracking-wider">Social Media</h3>
                         <div className="flex justify-center md:justify-start">
                             <AnimatedFacebookButton />
                         </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-300 dark:border-folk-blue/30 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>{t('copyright')}</p>
                </div>
            </div>
        </footer>
    );
}