import React, { useState, useEffect } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { MOCK_REVIEWS, GOOGLE_REVIEWS_URL, FACEBOOK_URL } from '../constants';
import { AnimatedSection } from '../components/AnimatedSection';
import { FolkArtFlourish, FlowerArtCorner } from '../components/icons/FolkArtIcons';
import { StarRating } from '../components/StarRating';

interface PageProps {
  id: string;
}

export const ReviewsPage: React.FC<PageProps> = ({ id }) => {
    const { t, theme } = useAppContext();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % MOCK_REVIEWS.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };
    
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % MOCK_REVIEWS.length);
    }
    
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + MOCK_REVIEWS.length) % MOCK_REVIEWS.length);
    }

    const pageBg = {
        light: 'bg-slate-100',
        dark: 'bg-secondary-dark',
        wood: 'bg-secondary-dark',
        flower: 'bg-secondary-dark',
    }[theme];

    const cardBg = {
        light: 'bg-secondary-light/80',
        dark: 'bg-primary-dark/50',
        wood: 'bg-primary-dark/50',
        flower: 'bg-primary-dark/50',
    }[theme];
    
    return (
        <div id={id} className={`py-24 ${pageBg} text-text-dark dark:text-text-light`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <div className="flex justify-center items-center gap-4">
                        <FolkArtFlourish className="text-folk-red/50 hidden md:block" />
                        <h1 className="text-5xl md:text-7xl font-bold text-folk-red font-serif">{t('reviews_title')}</h1>
                        <FolkArtFlourish className="text-folk-red/50 transform scale-x-[-1] hidden md:block" />
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-2">
                        <p className="text-xl text-text-dark-secondary dark:text-text-light-secondary">{t('reviews_average')}:</p>
                        <div className="flex items-center gap-3">
                            <StarRating rating={4.3} />
                            <span className="text-2xl font-bold text-text-dark dark:text-text-light">4.3 / 5</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">({t('based_on_reviews')})</p>
                        <a 
                            href={GOOGLE_REVIEWS_URL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-4 inline-block bg-folk-blue text-white font-semibold py-2 px-6 rounded-full hover:bg-folk-blue/80 transition-all duration-300 active:scale-95 hover:shadow-md hover:shadow-folk-blue/40"
                        >
                            {t('all_reviews_google')}
                        </a>
                    </div>
                </AnimatedSection>

                {/* Reviews Slider */}
                <AnimatedSection className="relative max-w-3xl mx-auto">
                    <div className="relative h-80 md:h-64 overflow-hidden">
                        {MOCK_REVIEWS.map((review, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className={`relative h-full overflow-hidden ${cardBg} backdrop-blur-lg border border-slate-200 dark:border-folk-blue/20 rounded-lg p-8 flex flex-col justify-center items-center text-center shadow-lg`}>
                                    <FlowerArtCorner className="absolute top-0 left-0 w-20 h-20 text-folk-red opacity-10 dark:opacity-20 pointer-events-none" />
                                    <FlowerArtCorner className="absolute top-0 right-0 w-20 h-20 text-folk-red opacity-10 dark:opacity-20 pointer-events-none transform rotate-90" />
                                    <FlowerArtCorner className="absolute bottom-0 left-0 w-20 h-20 text-folk-red opacity-10 dark:opacity-20 pointer-events-none transform -rotate-90" />
                                    <FlowerArtCorner className="absolute bottom-0 right-0 w-20 h-20 text-folk-red opacity-10 dark:opacity-20 pointer-events-none transform rotate-180" />
                                    <p className="text-lg italic text-text-dark-secondary dark:text-text-light-secondary mb-4">"{review.text}"</p>
                                    <StarRating rating={review.rating} />
                                    <h4 className="mt-4 text-xl font-bold text-folk-red">{review.author}</h4>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 bg-white/10 dark:bg-black/20 p-2 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:ring-2 hover:ring-folk-red/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                     <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 bg-white/10 dark:bg-black/20 p-2 rounded-full hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 hover:ring-2 hover:ring-folk-red/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                     <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                        {MOCK_REVIEWS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-folk-red scale-125' : 'bg-slate-400 dark:bg-slate-500 hover:bg-slate-500/80 hover:ring-2 hover:ring-folk-red/50'}`}
                                aria-label={`Go to review ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </AnimatedSection>
                
                {/* Facebook Community Section */}
                <AnimatedSection className="mt-24 text-center">
                    <h2 className="text-3xl font-bold text-text-dark dark:text-text-light">{t('join_community')}</h2>
                    <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-folk-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-folk-blue/80 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-folk-blue/40">
                        Facebook
                    </a>
                </AnimatedSection>
            </div>
        </div>
    );
};