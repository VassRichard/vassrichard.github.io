import { LandingAreaConfigType, RoleConfigType, ExperienceAreaConfigType, TechnologyConfigType } from "../utils/types";
import Mobile from "../assets/technologies/mobile.jpg";
import Web from "../assets/technologies/web.jpg";
import MachineLearning from "../assets/technologies/machine_learning.jpg";
// LANDING AREA

export const LandingAreaRoleConfig: RoleConfigType = {
    firstText: "SOFTWARE",
    secondText: "DEVELOPER"
}

export const LandingAreaConfig: LandingAreaConfigType = {
    roleText: LandingAreaRoleConfig,
    introText: "I'm an experienced Android developer with a passion for crafting innovative mobile solutions. " +
    "I also bring expertise in machine learning and web development to the table, complemented by a keen eye for design, " + 
    "thus ensuring that both the functionality and aesthetics of your app are top-notch.",
    outroText: "Let's build something extraordinary together!"
};

// EXPERIENCE AREA

export const TechnologyConfig: TechnologyConfigType[] = [
    {
        title: "MOBILE",
        wallpaper: Mobile,
        description: "TEST"
    },
    {
        title: "WEB",
        wallpaper: Web,
        description: "TEST"
    },
    {
        title: "MACHINE LEARNING",
        wallpaper: MachineLearning,
        description: "TEST"
    }
];

export const ExperienceAreaConfig: ExperienceAreaConfigType = {
    title: "TECH STACK & EXPERTISE",
    description: "and some tech I like to work with",
    technologies: TechnologyConfig,
};