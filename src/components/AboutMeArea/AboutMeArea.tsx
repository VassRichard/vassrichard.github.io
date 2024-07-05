import { FC } from "react";
import { AboutMeWrapper, DescriptionText, CurriculumVitaeText } from './AboutMeArea.css';
import { SeparatorMargin, FlexContainer, FlexColumn } from '../General/GeneralComponents.css';
import { SocialMediaContainer } from '../SocialMediaContainer/SocialMediaContainer';
import { SocialMediaConfig } from '../../config/general';
import { AboutMeConfig } from '../../config/general';

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
                        {AboutMeConfig.introText}
                    </DescriptionText>
                    <SeparatorMargin value={1}/>
                    <DescriptionText size={1}>
                        {AboutMeConfig.midText}
                    </DescriptionText>
                    <SeparatorMargin value={1}/>
                    <DescriptionText size={1}>
                        {AboutMeConfig.outroText}
                    </DescriptionText>
                </FlexColumn>
                <SeparatorMargin value={2.5}/>
                <FlexColumn textAlign={"center"} columnPercentage={20}>
                    <DescriptionText size={1.5}>
                        {AboutMeConfig.socialText}
                    </DescriptionText>
                    <SeparatorMargin value={0.5}/>
                    <SocialMediaContainer isBackgroundLight={true} socialMediaIcons={SocialMediaConfig}/>
                    <SeparatorMargin value={3}/>
                    <CurriculumVitaeText onClick={handleDownloadAction}>
                        {AboutMeConfig.curriculumVitae}
                    </CurriculumVitaeText>
                </FlexColumn>
            </FlexContainer>
        </AboutMeWrapper>
    )
};
