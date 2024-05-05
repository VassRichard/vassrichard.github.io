export const SCREEN_SIZES = {
    bigScreen: 1700,
    desktop: 1200,
    tablet: 768,
    mobile: 400
};

export const Breakpoints = {
    nano: '400px',
    small: '500px',
    medium: '768px',
    mediumExtra: '1024px',
    large: '1200px',
    xxLarge: '1920px',
    fourK: '3840px'
};

export const minWidthQuery = (breakpoint: string) => `@media screen and (min-width: ${breakpoint})`;