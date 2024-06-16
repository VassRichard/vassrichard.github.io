// LANDING AREA

export type LandingAreaConfigType = {
    greetingText: string;
    nameText: string;
    locationText: string;
};

// EXPERIENCE AREA

export type ExperienceAreaConfigType = {
    title: string;
    curriculumVitae: string;
    technologies: TechnologyConfigType[]
};

export type TechnologyConfigType = {
    title: string;
    isEnabled: boolean;
    wallpaper: string;
    summary: string;
    description: string;
}

// SOCIAL MEDIA

export type SocialMediaConfigType = {
    id: string;
    icon: string;
    url: string;
};