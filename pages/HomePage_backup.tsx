import React, { useState, useEffect, useCallback } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { FACEBOOK_URL, OCCASIONS_DATA } from '../constants';
import { AnimatedSection } from '../components/AnimatedSection';
import { FolkArtCorner, FolkArtFlourish, FolkArtFlowerFrame, FlowerArtCorner } from '../components/icons/FolkArtIcons';

// Hero carousel images
const HERO_IMAGES = [
  'okładka strony.jpg',
  'okładka strony3.jpg', 
  'okładka strony4.jpg',
  'OKŁADKA STRONY 2.jpg',
  'TŁO O NAS .jpg',
  'o nas.png'
];

// Advertisements/promotional videos data
const ADVERTISEMENTS_DATA = [
  {
    id: 1,
    title: 'Weekendowa Promocja', 
    description: 'Specjalne oferty na weekendy - zobacz naszą najnowszą reklamę!',
    videoUrl: '/videos/weekendowa promocja.mp4', // ✅ Twój prawdziwy film
    thumbnailUrl: '/images/Impreza  firmowa.jpg'
  }
];


interface PageProps {
  id: string;
}

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, [text]);
    return <span className="border-r-2 border-folk-yellow animate-pulse">{displayedText}</span>;
}

export const HomePage: React.FC<PageProps> = ({ id }) => {
    const { t, theme } = useAppContext();
    const [currentOccasionIndex, setCurrentOccasionIndex] = useState(0);
    const [currentHeroImage, setCurrentHeroImage] = useState(0);
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [flippedCards, setFlippedCards] = useState(new Set<number>());

    // Hero image carousel effect
    useEffect(() => {
        const heroCarouselInterval = setInterval(() => {
            setCurrentHeroImage(prev => (prev + 1) % HERO_IMAGES.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(heroCarouselInterval);
    }, []);

    useEffect(() => {
        const occasionCarouselInterval = setInterval(() => {
            setCurrentOccasionIndex(prev => (prev + 1) % OCCASIONS_DATA.length);
        }, 7000);

        return () => {
            clearInterval(occasionCarouselInterval);
        };
    }, []);
    
    const heroOverlayBg = {
        light: 'bg-primary-light/30',
        dark: 'bg-primary-dark/80',
        wood: 'bg-primary-dark/80',
        flower: 'bg-primary-dark/80',
    }[theme];

    const aboutUsBg = {
        light: 'bg-secondary-light/80',
        dark: 'bg-secondary-dark/30',
        wood: 'bg-secondary-dark/30',
        flower: 'bg-secondary-dark/30',
    }[theme];

    const cardBaseBg = {
        light: 'bg-white',
        dark: 'bg-secondary-dark',
        wood: 'bg-secondary-dark',
        flower: 'bg-secondary-dark',
    };

    const nextOccasion = useCallback(() => {
        setCurrentOccasionIndex(prev => (prev + 1) % OCCASIONS_DATA.length);
    }, []);

    const prevOccasion = useCallback(() => {
        setCurrentOccasionIndex(prev => (prev - 1 + OCCASIONS_DATA.length) % OCCASIONS_DATA.length);
    }, []);
    
    const handleCardClick = (index: number) => {
        if (index !== currentOccasionIndex) return; // Only allow flipping the center card
        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
            } else {
                newSet.add(index);
            }
            return newSet;
        });
    };

    return (
        <div id={id} className="space-y-24 md:space-y-32 pb-24">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center text-center -mt-20 overflow-hidden">
                {/* Hero Images Carousel */}
                {HERO_IMAGES.map((image, index) => (
                    <div 
                        key={index}
                        className={`absolute inset-0 parallax-bg transition-opacity duration-1000 ${
                            index === currentHeroImage ? 'opacity-100' : 'opacity-0'
                        }`} 
                        style={{ 
                            backgroundImage: `url('/images/${image}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className={`absolute inset-0 ${heroOverlayBg}`}></div>
                    </div>
                ))}
                 <FolkArtCorner className="absolute -bottom-10 -left-10 text-folk-red/10 w-48 h-48 opacity-50" />
                 <FolkArtCorner className="absolute -bottom-10 -right-10 text-folk-blue/10 w-48 h-48 opacity-50 transform rotate-90" />
                <div className="relative z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-folk-red font-serif mb-4 drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_50%)]">
                        {t('restaurant_name')}
                    </h1>
                    <p className="text-xl md:text-2xl text-white dark:text-text-light mt-4 h-8 [text-shadow:__1px_1px_2px_rgb(0_0_0_/_70%)]">
                        <Typewriter text={t('slogan')} />
                    </p>
                    <a
                        href="#reservation"
                        className="mt-12 inline-block bg-folk-red text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-folk-pink transform active:scale-95 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-folk-red/40"
                    >
                        {t('nav_reservation')}
                    </a>
                </div>
                
                {/* Hero Carousel Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {HERO_IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentHeroImage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentHeroImage 
                                    ? 'bg-folk-red scale-125' 
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
            
            {/* About Us */}
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div 
                    className="relative p-6"
                    style={{
                        backgroundImage: "url('/images/TŁO O NAS .jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '1rem'
                    }}
                >
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/60 rounded-2xl"></div>
                    
                    <div className="relative z-10">
                        <FlowerArtCorner className="absolute top-0 left-0 w-24 h-24 text-folk-red opacity-10 dark:opacity-20 pointer-events-none" />
                        <FlowerArtCorner className="absolute top-0 right-0 w-24 h-24 text-folk-red opacity-10 dark:opacity-20 pointer-events-none transform rotate-90" />
                        <FlowerArtCorner className="absolute bottom-0 left-0 w-24 h-24 text-folk-red opacity-10 dark:opacity-20 pointer-events-none transform -rotate-90" />
                        <FlowerArtCorner className="absolute bottom-0 right-0 w-24 h-24 text-folk-red opacity-10 dark:opacity-20 pointer-events-none transform rotate-180" />
                        <FolkArtFlowerFrame className="absolute inset-0 w-full h-full text-folk-red/20 dark:text-folk-blue/20" />
                        <div className="relative grid md:grid-cols-2 gap-12 items-center backdrop-blur-md p-8 rounded-lg shadow-xl">
                            <div className="flex justify-center items-center">
                                <div 
                                    className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-folk-red/30 relative"
                                    style={{
                                        backgroundImage: "url('/images/TŁO MENU.png')",
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'repeat'
                                    }}
                                >
                                    {/* Logo overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img 
                                            loading="lazy" 
                                            src="/images/logo o nas.png" 
                                            alt="Leniwa Baba Logo" 
                                            className="w-48 h-48 object-contain drop-shadow-lg"
                                            onError={(e) => {
                                                console.error('Failed to load logo image');
                                                // Try fallback image
                                                e.currentTarget.src = '/images/o nas.png';
                                                e.currentTarget.onerror = null;
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold text-white font-serif mb-4 drop-shadow-lg [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">{t('about_us_title')}</h2>
                                <p className="text-lg text-white leading-relaxed drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">{t('about_us_text')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Occasions Carousel Section */}
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center gap-4 mb-12">
                    <FolkArtFlourish className="text-folk-blue/50 hidden md:block" />
                    <h2 className="text-4xl font-bold text-folk-red font-serif text-center">{t('occasions_title')}</h2>
                    <FolkArtFlourish className="text-folk-blue/50 transform scale-x-[-1] hidden md:block" />
                </div>
                <div className="relative flex justify-center items-center h-[28rem]">
                    {/* Navigation Buttons */}
                    <button onClick={prevOccasion} className="absolute left-0 md:-left-8 z-30 p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-all duration-300 hover:ring-2 hover:ring-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={nextOccasion} className="absolute right-0 md:-right-8 z-30 p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-all duration-300 hover:ring-2 hover:ring-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>

                    <div className="relative w-full h-full [perspective:1000px]">
                        {OCCASIONS_DATA.map((occasion, index) => {
                            const offset = (index - currentOccasionIndex + OCCASIONS_DATA.length) % OCCASIONS_DATA.length;
                            const isCenter = offset === 0;
                            const isLeft = offset === OCCASIONS_DATA.length - 1;
                            const isRight = offset === 1;

                            let transform = 'scale(0.6) translateZ(-400px)';
                            let zIndex = 0;
                            let opacity = 0.4;
                            
                            if (isCenter) {
                                transform = 'translateZ(0) scale(1)';
                                zIndex = 30;
                                opacity = 1;
                            } else if (isLeft) {
                                transform = 'translateX(-60%) translateZ(-200px) scale(0.8) rotateY(30deg)';
                                zIndex = 20;
                                opacity = 0.7;
                            } else if (isRight) {
                                transform = 'translateX(60%) translateZ(-200px) scale(0.8) rotateY(-30deg)';
                                zIndex = 20;
                                opacity = 0.7;
                            }

                            return (
                                <div
                                    key={occasion.key}
                                    className="absolute w-full h-full flex justify-center items-center transition-all duration-700 ease-in-out"
                                    style={{ transform, zIndex, opacity }}
                                >
                                    <div 
                                      className={`w-64 h-96 [transform-style:preserve-3d] rounded-lg ${isCenter ? 'cursor-pointer animate-glow' : ''}`}
                                      onClick={() => handleCardClick(index)}
                                    >
                                        <div className={`relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] ${flippedCards.has(index) ? '[transform:rotateY(180deg)]' : ''}`}>
                                            {/* Front Face */}
                                            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-2xl">
                                                <img loading="lazy" src={`/images/${occasion.imageId}`} alt={t(occasion.key)} className="w-full h-full object-cover" onError={(e) => {
                                                  console.error(`Failed to load image: /images/${occasion.imageId}`);
                                                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                                                  e.currentTarget.style.display = 'flex';
                                                  e.currentTarget.style.alignItems = 'center';
                                                  e.currentTarget.style.justifyContent = 'center';
                                                  e.currentTarget.innerHTML = '<div style="color: #9ca3af; text-align: center; font-family: serif;">Brak obrazu</div>';
                                                }}/>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                                <h3 className="absolute bottom-4 left-4 text-2xl font-serif text-white [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)]">
                                                    {t(occasion.key)}
                                                </h3>
                                                {isCenter && !flippedCards.has(index) && (
                                                    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 text-white text-xs rounded-full px-3 py-1 backdrop-blur-sm animate-gentle-bounce pointer-events-none">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 9a9 9 0 0114.65-4.65l-2.12 2.12" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 15a9 9 0 01-14.65 4.65l2.12-2.12" />
                                                        </svg>
                                                        <span>{t('click_to_flip')}</span>
                                                    </div>
                                                )}
                                            </div>
                                            {/* Back Face */}
                                            <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg shadow-2xl overflow-hidden p-6 flex flex-col justify-center items-center text-center ${cardBaseBg[theme]} border-2 border-folk-red/30`}>
                                                <FlowerArtCorner className="absolute top-0 left-0 w-20 h-20 text-folk-red opacity-20 pointer-events-none" />
                                                <FlowerArtCorner className="absolute top-0 right-0 w-20 h-20 text-folk-red opacity-20 pointer-events-none transform rotate-90" />
                                                <FlowerArtCorner className="absolute bottom-0 left-0 w-20 h-20 text-folk-red opacity-20 pointer-events-none transform -rotate-90" />
                                                <FlowerArtCorner className="absolute bottom-0 right-0 w-20 h-20 text-folk-red opacity-20 pointer-events-none transform rotate-180" />
                                                <div className="relative z-10">
                                                    <h4 className="text-2xl font-serif font-bold text-folk-red mb-3">{t(occasion.key)}</h4>
                                                    <p className="text-sm text-text-dark-secondary dark:text-text-light-secondary mb-5">{t(occasion.descriptionKey)}</p>
                                                    <a href="#reservation" className="bg-folk-red text-white font-bold py-2 px-6 rounded-full text-sm hover:bg-folk-pink transform active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-folk-red/40">
                                                        {t('book_now')}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AnimatedSection>

            {/* Advertisements Section */}
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-folk-blue font-serif mb-4">
                        Zobacz nasze reklamy
                    </h2>
                    <p className="text-xl text-text-dark-secondary dark:text-text-light-secondary">
                        Zarezerwuj stolik online przez WhatsApp. W przypadku grup powyżej 20 osób prosimy o kontakt telefoniczny.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Advertisements section */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                            {ADVERTISEMENTS_DATA.map((ad, index) => {
                                const offset = (index - currentAdIndex + ADVERTISEMENTS_DATA.length) % ADVERTISEMENTS_DATA.length;
                                const isCenter = offset === 0;
                                const isLeft = offset === ADVERTISEMENTS_DATA.length - 1;
                                const isRight = offset === 1;
                                const isVisible = isCenter || isLeft || isRight;

                                return (
                                    <div
                                        key={ad.id}
                                        className={`transition-all duration-700 transform ${
                                            !isVisible ? 'hidden md:block opacity-0 scale-75' : 
                                            isCenter ? 'opacity-100 scale-105 border-4 border-folk-blue shadow-2xl shadow-folk-blue/50' :
                                            'opacity-60 scale-95'
                                        } ${isCenter ? 'z-20' : 'z-10'}`}
                                        style={{
                                            transform: !isVisible ? 'scale(0.75)' :
                                                     isCenter ? 'scale(1.05)' : 'scale(0.95)'
                                        }}
                                    >
                                        <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                                            <video 
                                                className="w-full h-full object-cover"
                                                poster={ad.thumbnailUrl}
                                                muted
                                                loop
                                                playsInline
                                                onMouseEnter={(e) => e.currentTarget.play()}
                                                onMouseLeave={(e) => e.currentTarget.pause()}
                                                onError={(e) => {
                                                    console.warn(`Video failed to load: ${ad.videoUrl}, falling back to thumbnail`);
                                                    e.currentTarget.style.display = 'none';
                                                    const fallbackImg = e.currentTarget.nextElementSibling as HTMLImageElement;
                                                    if (fallbackImg) {
                                                        fallbackImg.style.display = 'block';
                                                    }
                                                }}
                                            >
                                                <source src={ad.videoUrl} type="video/mp4" />
                                                Twoja przeglądarka nie obsługuje video.
                                            </video>
                                            
                                            {/* Fallback image for when video fails */}
                                            <img 
                                                src={ad.thumbnailUrl} 
                                                alt={ad.title} 
                                                className="w-full h-full object-cover hidden" 
                                                onError={(e) => {
                                                    console.error(`Both video and thumbnail failed for: ${ad.title}`);
                                                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                                                    e.currentTarget.style.display = 'flex';
                                                    e.currentTarget.style.alignItems = 'center';
                                                    e.currentTarget.style.justifyContent = 'center';
                                                    e.currentTarget.innerHTML = '<div style="color: #9ca3af; text-align: center;">Brak filmu</div>';
                                                }}
                                            />
                                            
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                            <div className="absolute bottom-4 left-4 right-4 text-white">
                                                <h3 className="text-xl font-bold font-serif mb-2 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">
                                                    {ad.title}
                                                </h3>
                                                <p className="text-sm [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">
                                                    {ad.description}
                                                </p>
                                            </div>
                                            
                                            {/* Play button overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-folk-blue/80 rounded-full p-4 backdrop-blur-sm">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {ADVERTISEMENTS_DATA.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentAdIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentAdIndex 
                                        ? 'bg-folk-blue scale-125' 
                                        : 'bg-gray-400 hover:bg-gray-600'
                                }`}
                                aria-label={`Przejdź do reklamy ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};