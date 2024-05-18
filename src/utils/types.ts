// LANDING AREA

export type LandingAreaConfigType = {
    roleText: RoleConfigType;
    introText: string;
    outroText: string;
};

export type RoleConfigType = {
    firstText: string;
    secondText: string;
}

// EXPERIENCE AREA

export type ExperienceAreaConfigType = {
    title: string;
    description: string;
    technologies: TechnologyConfigType[]
};

export type TechnologyConfigType = {
    title: string;
    wallpaper: string;
    description: string;
}