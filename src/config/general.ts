import { LandingAreaConfigType, AboutMeConfigType, ExperienceAreaConfigType, TechnologyConfigType, SocialMediaConfigType } from "../utils/types";
import Mobile from "../assets/technologies/mobile.jpg";
import Web from "../assets/technologies/web.jpg";
import MachineLearning from "../assets/technologies/machine_learning.jpg";
import LinkedIn from "../assets/social/linkedin.svg";
import Github from "../assets/social/github.svg";

// LANDING AREA

export const LandingAreaConfig: LandingAreaConfigType = {
    greetingText: "Hi, my name is",
    nameText: "VASS RICHARD",
    locationText: "Software developer based in Cluj-Napoca"
};

// ABOUT ME

export const AboutMeConfig: AboutMeConfigType = {
    introText: "Hello again, I'm Richard: android developer, design hobbyist, gamer, fitness enthusiast and a bad joker.",
    midText: " Would you believe if I told you that my developer journey started with Photoshop back in 2014? Fast-forward to today, I think I've made that kid proud as " +
    "I've had the opportunity of building software for a start-up, and a well-established entertainment company for the last couple of years.",
    outroText: "Hello again, I'm Richard: android developer, design hobbyist, gamer, fitness enthusiast and a bad joker.",
    socialText: "ALSO I'M SOCIAL",
    curriculumVitae: "DOWNLOAD CV",
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
    title: "WHAT I DO",
    technologies: TechnologyConfig,
};

// SOCIAL MEDIA

export const SocialMediaConfig: SocialMediaConfigType[] = [
    {
        id: "linkedin",
        icon: LinkedIn,
        url: "https://www.linkedin.com/in/richard-daniel-vass-8829621b1/",
    },
    {
        id: "medium",
        icon: Github,
        url: "https://github.com/VassRichard",
    }
];