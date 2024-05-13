import { useEffect, useState } from 'react';
import { SCREEN_SIZES } from "./globals";

type resolutions = keyof typeof SCREEN_SIZES;

export const useGetScreenSize = () => {
    const [resolution, setResolution] = useState<resolutions>();

    const setupResolutionAdaptation = () => {
        Object.entries(SCREEN_SIZES).some(([key, value]) => {
            if (value <= window.innerWidth) {
                setResolution(key as resolutions);
                return true;
            }
            return false;
        });

        return false;
    };

    useEffect(() => {
        setupResolutionAdaptation();
        window.addEventListener('resize', setupResolutionAdaptation);

        return () => {
            window.removeEventListener('resize', setupResolutionAdaptation);
        };
    }, []);

    return {
        resolution,
        isMobile: (): boolean => resolution === 'mobile',
        isTablet: (): boolean => resolution === 'tablet',
        isDesktop: (): boolean => resolution === 'desktop',
        isBigScreen: (): boolean => resolution === 'bigScreen'
    };
};