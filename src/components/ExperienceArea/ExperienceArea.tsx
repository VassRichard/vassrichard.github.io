import { FC } from "react";
import { ExperienceAreaWrapper, TitleText, CurriculumVitaeText, TechnologyCardsWrapper, FlexContainer } from './ExperienceArea.css';
import { ExperienceAreaConfig, TechnologyConfig } from '../../config/general';
import { useGetScreenSize } from "../../utils/resolutions";
import { TechnologyConfigType } from "../../utils/types";
import { TechnologyCard } from './TechnologyCard/TechnologyCard';

export const ExperienceArea: FC = () => {

    return (
        <ExperienceAreaWrapper >
            <CurriculumVitaeText>DOWNLOAD CV</CurriculumVitaeText>
            <TitleText >
                {ExperienceAreaConfig.title}
            </TitleText>
            <TechnologyCardsWrapper>
                <FlexContainer positionType={"space-around"}>
                        {TechnologyConfig.map((technology: TechnologyConfigType) => {
                            return (
                                <TechnologyCard technology={technology}/>
                            );
                        })}
                </FlexContainer>
            </TechnologyCardsWrapper>
        </ExperienceAreaWrapper>
    )
};
