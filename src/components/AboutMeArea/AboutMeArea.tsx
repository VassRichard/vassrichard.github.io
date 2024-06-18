import { FC } from "react";
import { AboutMeWrapper, DescriptionText, CurriculumVitaeText } from './AboutMeArea.css';
import { SeparatorMargin, FlexContainer, FlexColumn } from '../General/GeneralComponents.css';
import { SocialMediaContainer } from '../SocialMediaContainer/SocialMediaContainer';
import { SocialMediaConfig } from '../../config/general';
import { ExperienceAreaConfig } from '../../config/general';

export const AboutMeArea: FC = () => {

    const handleDownloadAction = () => {
        const url = 'CV - Vass Richard-Daniel.pdf';
        window.open(url);
    };

    return (
        <AboutMeWrapper >
            <FlexContainer positionType={"space-around"}>
                <FlexColumn textAlign={"start"} columnPercentage={70}>
                    <DescriptionText size={1}>
                        Hello again, I'm Richard: android developer, design hobbyist, gamer, fitness enthusiast and a bad joker.
                    </DescriptionText>
                    <SeparatorMargin value={1}/>
                    <DescriptionText size={1}>
                        Although I have 3 years of experience in native Android development, my curiosity doesn't stop there. In my spare time, I delve into creating 
                        sleek websites and apps, and explore machine learning projects that may simplify our lives. Also out of curiosity rather than regular practice I might 
                        find joy in nimbling in parts of a new video game concept and design or learn about system security and ethical hacking.
                    </DescriptionText>
                    <SeparatorMargin value={1}/>
                    <DescriptionText size={1}>
                        If there's nothing on my schedule I might nerd out on my favorite video games and when I'm not in my digital realm I like to sit back and read a good book, work out to keep myself healthy or binge-watch TV series.
                    </DescriptionText>
                </FlexColumn>
                <SeparatorMargin value={2.5}/>
                <FlexColumn textAlign={"center"} columnPercentage={20}>
                    <DescriptionText size={1.5}>
                        ALSO I'M SOCIAL
                    </DescriptionText>
                    <SeparatorMargin value={0.5}/>
                    <SocialMediaContainer isBackgroundLight={true} socialMediaIcons={SocialMediaConfig}/>
                    <SeparatorMargin value={3}/>
                    <CurriculumVitaeText onClick={handleDownloadAction}>
                        {ExperienceAreaConfig.curriculumVitae}
                    </CurriculumVitaeText>
                </FlexColumn>
            </FlexContainer>
        </AboutMeWrapper>
    )
};
