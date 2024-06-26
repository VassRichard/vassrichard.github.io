// LANDING AREA

export type LandingAreaConfigType = {
    greetingText: string;
    nameText: string;
    locationText: string;
};

// ABOUT ME AREA

export type AboutMeConfigType = {
    introText: string;
    midText: string;
    outroText: string;
    socialText: string;
    curriculumVitae: string;
};

// SOCIAL MEDIA

export type SocialMediaConfigType = {
    id: string;
    icon: string;
    url: string;
};

// EXPERIENCE AREA

export type RoleConfigType = {
    title: string;
    description: string;
    skills: string[];
}

export type ExperienceConfigType = {
    title: string;
    roles: RoleConfigType[]
}

// SERVICES AREA

export type TechnologyConfigType = {
    title: string;
    isEnabled: boolean;
    wallpaper: string;
    summary: string;
    description: string;
}

export type ServicesConfigType = {
    title: string;
    technologies: TechnologyConfigType[]
}