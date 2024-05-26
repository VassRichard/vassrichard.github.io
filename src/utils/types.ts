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
    curriculumVitae: string;
    technologies: TechnologyConfigType[]
};

export type TechnologyConfigType = {
    title: string;
    wallpaper: string;
    summary: string;
    description: string;
}