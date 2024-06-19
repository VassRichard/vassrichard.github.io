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
                        Would you believe if I told you that my developer journey started with Photoshop back in 2014? Fast-forward to today, I think I've made that kid proud as 
                        I've had the opportunity of building software for a start-up, and a well-established entertainment company for the last couple of years.
                    </DescriptionText>
                    <SeparatorMargin value={1}/>
                    <DescriptionText size={1}>
                        Usually you'll find me dabbling in some tech but otherwise if there's nothing on my schedule I might nerd out on my favorite video games. When I'm not in my digital realm I like to read a good book, work out or binge-watch TV series.
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
