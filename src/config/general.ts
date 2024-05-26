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
        title: "Mobile development",
        wallpaper: Mobile,
        summary: "Building apps that are smooth, sleek, and oh-so-simple to use.",
        description: "My Android journey began tentatively in 2019, but it wasn't until 2020 that I truly immersed myself in it. " +
        "Since then, I've delved deep into Java and Kotlin, crafting several apps along the way. With each project, I've refined my skills and developed a passion for " +
        "creating intuitive and impactful mobile experiences."
    },
    {
        title: "Web development",
        wallpaper: Web,
        summary: "Making websites that look good and do cool things.",
        description: "My web development journey began in 2017, but I set it aside for a while. Now, in 2024, I've reignited my passion for it and embarked on a journey " +
        "to learn and master the craft once more. With a renewed enthusiasm, I'm eager to explore the latest technologies and create engaging web experiences."
    },
    {
        title: "Machine learning",
        wallpaper: MachineLearning,
        summary: "Using data to solve problems and make life easier.",
       description: "My journey with machine learning started with my bachelor's thesis, where I developed a tool for detecting broken and intact objects. " +
       "Although I've always had ideas for further exploration, I lacked the time to pursue them fully. Now, with some free time on my hands, I'm diving back " +
       "into the world of machine learning, whether it's through reading or working on new projects."
    }
];

export const ExperienceAreaConfig: ExperienceAreaConfigType = {
    title: "TECH STACK & EXPERTISE",
    curriculumVitae: "DOWNLOAD CV",
    technologies: TechnologyConfig,
};