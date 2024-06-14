import { LandingAreaConfigType, ExperienceAreaConfigType, TechnologyConfigType } from "../utils/types";
import Mobile from "../assets/technologies/mobile.jpg";
import Web from "../assets/technologies/web.jpg";
import MachineLearning from "../assets/technologies/machine_learning.jpg";

// LANDING AREA

export const LandingAreaConfig: LandingAreaConfigType = {
    greetingText: "Hi, my name is",
    nameText: "VASS RICHARD",
    locationText: "Software developer based in Cluj-Napoca"
};

// EXPERIENCE AREA

export const TechnologyConfig: TechnologyConfigType[] = [
    {
        title: "Mobile development",
        isEnabled: false,
        wallpaper: Mobile,
        summary: "Building apps that are smooth, sleek, and oh-so-simple to use.",
        description: "My Android adventure began and took full flight 5 years ago. Proficient in Java and Kotlin, I've build a few apps from scratch and Android still continues to be my key focus and passion."
        },
    {
        title: "Web development",
        isEnabled: false,
        wallpaper: Web,
        summary: "Making websites that look good and do cool things.",
        description: "I've recently returned to web development, eager to unravel the endless opportunities it offers and bring the same quality to web as I deliver on mobile."
        },
    {
        title: "Machine learning",
        isEnabled: false,
        wallpaper: MachineLearning,
        summary: "Using data to solve problems and make life easier.",
       description: "Machine learning always fantasized me, there are just too many solutions it has to offer to humankind besides some pixels on a screen and I'm picking up the pace."
        }
];

export const ExperienceAreaConfig: ExperienceAreaConfigType = {
    title: "TECH STACK & EXPERTISE",
    curriculumVitae: "DOWNLOAD CV",
    technologies: TechnologyConfig,
};