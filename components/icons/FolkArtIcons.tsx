import React from 'react';

export const FolkArtCorner: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        className={className}
        width="80" 
        height="80" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M50 0C50 27.6142 27.6142 50 0 50" stroke="currentColor" strokeWidth="2"/>
        <path d="M80 0C80 44.1828 44.1828 80 0 80" stroke="currentColor" strokeWidth="2"/>
        <path d="M20 0C20 11.0457 11.0457 20 0 20" stroke="currentColor" strokeWidth="2"/>
        <circle cx="35" cy="35" r="5" fill="currentColor"/>
        <circle cx="60" cy="60" r="8" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
        <path d="M 95 0 C 95 20, 85 35, 75 45" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

export const FolkArtFlourish: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        className={className}
        width="60" 
        height="20" 
        viewBox="0 0 60 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0 10 C 10 0, 20 0, 30 10 C 40 20, 50 20, 60 10" stroke="currentColor" strokeWidth="2" />
        <circle cx="30" cy="10" r="3" fill="currentColor" />
    </svg>
);

export const FolkArtFlowerFrame: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 400 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="stretch"
    >
        <path
            d="M50 2 C20 2 2 20 2 50 V 200 C 2 230 20 248 50 248 H 175 C 190 263 210 263 225 248 H 350 C 380 248 398 230 398 200 V 50 C 398 20 380 2 350 2 H 225 C 210 -13 190 -13 175 2 H 50 Z"
            stroke="currentColor"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
        />
    </svg>
);

export const RedMosaicCorner: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
    >
        <path d="M0 60 A 60 60 0 0 1 60 0" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <path d="M0 80 A 80 80 0 0 1 80 0" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
        <circle cx="42.42" cy="42.42" r="4" fill="currentColor"/>
        <circle cx="20.7" cy="77.3" r="4" fill="currentColor"/>
    </svg>
);

export const FlowerArtCorner: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
    >
        <path d="M20 80 C 20 20, 80 20, 80 80" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
        <path d="M50 0 C 10 30, 10 70, 50 100" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.8"/>
        <circle cx="50" cy="50" r="4" fill="var(--folk-yellow, #FFD100)" opacity="1"/>
        <circle cx="15" cy="15" r="6" fill="currentColor" opacity="0.6"/>
        <circle cx="85" cy="15" r="6" fill="currentColor" opacity="0.6" transform="rotate(90 85 15)"/>
        <circle cx="15" cy="85" r="6" fill="currentColor" opacity="0.6" transform="rotate(-90 15 85)"/>
    </svg>
);