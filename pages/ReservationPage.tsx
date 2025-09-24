import React, { useState, useCallback, useRef } from 'react';
import { useAppContext } from '../hooks/useAppContext';
import { RESTAURANT_PHONE_INTL, RESTAURANT_PHONE, FACEBOOK_URL } from '../constants';
import { AnimatedSection } from '../components/AnimatedSection';
import { FolkArtFlourish, FlowerArtCorner, FolkArtCorner } from '../components/icons/FolkArtIcons';

interface PageProps {
  id: string;
}

interface FormErrors {
  date?: string;
  phone?: string;
}

const FaqItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-300 dark:border-folk-blue/20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 px-2 text-left rounded-md transition-all duration-300 hover:bg-slate-100/50 dark:hover:bg-white/5 hover:ring-1 hover:ring-folk-blue/30"
            >
                <span className="text-lg font-semibold text-text-dark dark:text-text-light">{q}</span>
                <svg className={`w-6 h-6 text-folk-red transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <p className="pt-0 pb-4 text-text-dark-secondary dark:text-text-light-secondary">{a}</p>
                </div>
            </div>
        </div>
    );
};

const VIDEO_ADS_DATA = [
    { key: 'Weekendowa Promocja', thumbnailId: '/videos/weekendowa-promocja-15.jpg', videoUrl: '/videos/weekendowa promocja.mp4' },
    { key: 'ad2_title', thumbnailId: 302, videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
    { key: 'ad3_title', thumbnailId: 303, videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
];


const ClassicReservationForm: React.FC = () => {
    const { t } = useAppContext();
    const [formData, setFormData] = useState({
        date: '',
        time: '18:00',
        people: 2,
        occasion: 'other',
        notes: '',
        reminder: false,
        phone: '',
        email: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({...prev, [name]: undefined}));
        }
    };
    
    const occasions = ['birthday', 'corporate', 'family_dinner', 'family_lunch', 'communion', 'sports', 'karaoke', 'playstation', 'other'];
    const timeSlots = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.date) {
            newErrors.date = "Date is required.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\+?[0-9\s-]{7,}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            // Find the first element with an error and shake it
            const firstErrorKey = Object.keys(errors)[0];
            const errorElement = document.getElementById(firstErrorKey);
            if (errorElement) {
                errorElement.classList.add('animate-shake');
                setTimeout(() => errorElement.classList.remove('animate-shake'), 500);
            }
            return;
        }
        const { date, time, people, occasion, notes, phone, email, reminder } = formData;
        const message = `
*New Reservation Request*
-----------------------------
*Date:* ${date}
*Time:* ${time}
*Guests:* ${people}
*Occasion:* ${t(`occasion_${occasion}`)}
*Phone:* ${phone}
*Email:* ${email || 'None'}
*Special Requests:* ${notes || 'None'}
*Send Reminder:* ${reminder ? 'Yes' : 'No'}
-----------------------------
        `.trim().replace(/\n+/g, '\n');
        
        const whatsappUrl = `https://wa.me/${RESTAURANT_PHONE_INTL}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const inputClasses = "mt-1 block w-full bg-secondary-dark/50 border border-slate-600/50 rounded-md shadow-sm py-2 px-3 text-text-light focus:outline-none focus:ring-folk-red focus:border-folk-red sm:text-sm transition-colors duration-300 placeholder:text-text-light-secondary/50";
    const errorClasses = "border-red-500 focus:ring-red-500 focus:border-red-500";

    return (
        <div className="relative bg-primary-dark/80 p-8 md:p-10 rounded-lg border border-folk-red/50 shadow-2xl shadow-folk-red/10">
            <FolkArtCorner className="absolute -top-2 -left-2 w-20 h-20 text-folk-red/20 opacity-70 pointer-events-none" />
            <FolkArtCorner className="absolute -top-2 -right-2 w-20 h-20 text-folk-red/20 opacity-70 pointer-events-none transform rotate-90" />
            <FolkArtCorner className="absolute -bottom-2 -left-2 w-20 h-20 text-folk-red/20 opacity-70 pointer-events-none transform -rotate-90" />
            <FolkArtCorner className="absolute -bottom-2 -right-2 w-20 h-20 text-folk-red/20 opacity-70 pointer-events-none transform rotate-180" />

            <form onSubmit={handleSubmit} noValidate className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-text-light-secondary">{t('form_date')}</label>
                        <input type="date" name="date" id="date" required value={formData.date} onChange={handleInputChange} className={`${inputClasses} ${errors.date ? errorClasses : ''} [color-scheme:dark]`} />
                    </div>
                     <div>
                        <label htmlFor="time" className="block text-sm font-medium text-text-light-secondary">{t('form_time')}</label>
                        <select name="time" id="time" required value={formData.time} onChange={handleInputChange} className={`${inputClasses} [color-scheme:dark]`}>
                            {timeSlots.map(slot => <option key={slot} value={slot}>{slot}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="people" className="block text-sm font-medium text-text-light-secondary">{t('form_people')}</label>
                        <select name="people" id="people" required value={formData.people} onChange={handleInputChange} className={`${inputClasses} [color-scheme:dark]`}>
                            {[...Array(20)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="occasion" className="block text-sm font-medium text-text-light-secondary">{t('form_occasion')}</label>
                        <select name="occasion" id="occasion" value={formData.occasion} onChange={handleInputChange} className={`${inputClasses} [color-scheme:dark]`}>
                            {occasions.map(occ => <option key={occ} value={occ}>{t(`occasion_${occ}`)}</option>)}
                        </select>
                    </div>
                </div>

                <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-text-light-secondary">{t('form_notes')}</label>
                    <textarea name="notes" id="notes" placeholder={t('form_notes')} rows={3} value={formData.notes} onChange={handleInputChange} className={`${inputClasses} resize-none`}></textarea>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-light-secondary">{t('form_phone')}</label>
                    <input type="tel" name="phone" id="phone" placeholder="+31 123 456 789" required value={formData.phone} onChange={handleInputChange} className={`${inputClasses} ${errors.phone ? errorClasses : ''}`} />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-light-secondary">{t('form_email')}</label>
                    <input type="email" name="email" id="email" placeholder="example@email.com" value={formData.email} onChange={handleInputChange} className={inputClasses} />
                </div>

                <div className="flex items-center">
                    <input id="reminder" name="reminder" type="checkbox" checked={formData.reminder} onChange={handleInputChange} className="h-4 w-4 rounded border-gray-500 text-folk-red focus:ring-folk-red bg-secondary-dark" />
                    <label htmlFor="reminder" className="ml-2 block text-sm text-text-light">{t('form_reminder')}</label>
                </div>

                <button type="submit" className="w-full py-3 px-4 rounded-lg shadow-md text-lg font-bold text-white bg-folk-red hover:bg-folk-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark focus:ring-folk-red transition-all duration-300 transform active:scale-95 animate-glow">
                    {t('send_reservation_whatsapp')}
                </button>
            </form>
        </div>
    );
};


export const ReservationPage: React.FC<PageProps> = ({ id }) => {
    const { t, theme } = useAppContext();
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [flippedVideoCards, setFlippedVideoCards] = useState(new Set<number>());
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const nextVideo = useCallback(() => {
        setCurrentVideoIndex(prev => (prev + 1) % VIDEO_ADS_DATA.length);
    }, []);

    const prevVideo = useCallback(() => {
        setCurrentVideoIndex(prev => (prev - 1 + VIDEO_ADS_DATA.length) % VIDEO_ADS_DATA.length);
    }, []);

    const handleVideoCardClick = (index: number) => {
        if (index !== currentVideoIndex) return;
        const videoEl = videoRefs.current[index];

        setFlippedVideoCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(index)) {
                newSet.delete(index);
                videoEl?.pause();
            } else {
                newSet.add(index);
                videoEl?.play();
            }
            return newSet;
        });
    };

    const pageBg = {
        light: 'bg-primary-light',
        dark: 'bg-primary-dark',
        wood: 'bg-primary-dark',
        flower: 'bg-primary-dark',
    }[theme];
    
    const cardBaseBg = {
        light: 'bg-white',
        dark: 'bg-secondary-dark',
        wood: 'bg-secondary-dark',
        flower: 'bg-secondary-dark',
    };

    return (
        <div id={id} className={`py-24 ${pageBg} text-text-dark dark:text-text-light`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-12">
                     <div className="flex justify-center items-center gap-4">
                        <FolkArtFlourish className="text-folk-red/50 hidden md:block" />
                        <h1 className="text-5xl md:text-7xl font-bold text-folk-red font-serif">{t('reservation_title')}</h1>
                        <FolkArtFlourish className="text-folk-red/50 transform scale-x-[-1] hidden md:block" />
                    </div>
                    <p className="mt-4 text-xl text-text-dark-secondary dark:text-text-light-secondary max-w-3xl mx-auto">{t('reservation_subtitle')}</p>
                </AnimatedSection>
                
                {/* Video Ad Carousel */}
                <AnimatedSection className="mb-24">
                    <div className="flex justify-center items-center gap-4 mb-12">
                        <h2 className="text-4xl font-bold text-folk-blue font-serif text-center">{t('our_ads_title')}</h2>
                    </div>
                    <div className="relative flex justify-center items-center h-[28rem]">
                        <button 
                            onClick={prevVideo} 
                            className="absolute left-0 md:-left-8 z-30 p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-all duration-300 hover:ring-2 hover:ring-white/50"
                            title="Poprzednia reklama"
                            aria-label="Poprzednia reklama wideo"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button 
                            onClick={nextVideo} 
                            className="absolute right-0 md:-right-8 z-30 p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-all duration-300 hover:ring-2 hover:ring-white/50"
                            title="Następna reklama"
                            aria-label="Następna reklama wideo"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>

                        <div className="relative w-full h-full [perspective:1000px]">
                            {VIDEO_ADS_DATA.map((ad, index) => {
                                const offset = (index - currentVideoIndex + VIDEO_ADS_DATA.length) % VIDEO_ADS_DATA.length;
                                const isCenter = offset === 0;
                                const isLeft = offset === VIDEO_ADS_DATA.length - 1;
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
                                        key={ad.key}
                                        className="absolute w-full h-full flex justify-center items-center transition-all duration-700 ease-in-out"
                                        style={{ transform, zIndex, opacity }}
                                    >
                                        <div 
                                          className={`w-64 h-96 [transform-style:preserve-3d] rounded-lg ${isCenter ? 'cursor-pointer animate-glow' : ''}`}
                                          onClick={() => handleVideoCardClick(index)}
                                        >
                                            <div className={`relative w-full h-full transition-transform duration-1000 [transform-style:preserve-3d] ${flippedVideoCards.has(index) ? '[transform:rotateY(180deg)]' : ''}`}>
                                                {/* Front Face */}
                                                <div className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden shadow-2xl">
                                                    <FlowerArtCorner className="absolute top-0 left-0 w-20 h-20 text-folk-red opacity-20 pointer-events-none" />
                                                    <FlowerArtCorner className="absolute top-0 right-0 w-20 h-20 text-folk-red opacity-20 pointer-events-none transform rotate-90" />
                                                    <FlowerArtCorner className="absolute bottom-0 left-0 w-20 h-20 text-folk-red opacity-20 pointer-events-none transform -rotate-90" />
                                                    <FlowerArtCorner className="absolute bottom-0 right-0 w-20 h-20 text-folk-red opacity-20 pointer-events-none transform rotate-180" />
                                                    <img loading="lazy" src={typeof ad.thumbnailId === 'string' ? ad.thumbnailId : `https://picsum.photos/seed/${ad.thumbnailId}/400/600`} alt={t(ad.key)} className="w-full h-full object-cover"/>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                                    <h3 className="absolute bottom-4 left-4 text-2xl font-serif text-white [text-shadow:_1px_1px_3px_rgb(0_0_0_/_70%)]">
                                                        {t(ad.key)}
                                                    </h3>
                                                    {isCenter && !flippedVideoCards.has(index) && (
                                                        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 text-white text-xs rounded-full px-3 py-1 backdrop-blur-sm animate-gentle-bounce pointer-events-none">
                                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                                            <span>{t('click_to_flip')}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* Back Face */}
                                                <div className={`absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg shadow-2xl overflow-hidden flex justify-center items-center ${cardBaseBg[theme]} border-2 border-folk-red/30`}>
                                                    <video
                                                        // Fix: The ref callback should not return a value. Using a block body ensures an implicit `undefined` return.
                                                        ref={el => { videoRefs.current[index] = el; }}
                                                        src={ad.videoUrl}
                                                        muted
                                                        loop
                                                        controls
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </AnimatedSection>


                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-3">
                      <ClassicReservationForm />
                    </div>

                    {/* Info & FAQ */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <p className="text-center p-4 bg-blue-100 dark:bg-folk-blue/20 text-blue-800 dark:text-folk-blue/90 border border-blue-200 dark:border-folk-blue/50 rounded-lg">{t('reservation_confirmation_info')}</p>
                            <p className="mt-4 text-center p-4 bg-yellow-100 dark:bg-folk-yellow/20 text-yellow-800 dark:text-folk-yellow/90 border border-yellow-200 dark:border-folk-yellow/50 rounded-lg">{t('reservation_large_group_info')}</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-folk-red mb-4">{t('faq_title')}</h3>
                            <FaqItem q={t('faq1_q')} a={t('faq1_a')} />
                            <FaqItem q={t('faq2_q')} a={t('faq2_a')} />
                            <FaqItem q={t('faq3_q')} a={t('faq3_a')} />
                        </div>
                         <div className="space-y-4">
                            <a href={`tel:${RESTAURANT_PHONE}`} className="block w-full text-center bg-folk-green text-white font-bold py-3 px-4 rounded-md text-lg hover:bg-folk-green/80 transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-folk-green/40">{t('call_now')}</a>
                            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-folk-blue text-white font-bold py-3 px-4 rounded-md text-lg hover:bg-folk-blue/80 transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-folk-blue/40">{t('view_daily_menu_facebook')}</a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};