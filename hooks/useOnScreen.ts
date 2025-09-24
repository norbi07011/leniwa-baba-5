
import { useState, useEffect, RefObject } from 'react';

export const useOnScreen = <T extends Element,>(ref: RefObject<T>, rootMargin = "0px"): boolean => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                }
            },
            {
                rootMargin,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, rootMargin]);

    return isIntersecting;
};
