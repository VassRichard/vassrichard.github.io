import { FC } from "react";
import { ExperienceAreaWrapper, TitleText, HeadlineWrapper, TechnologyCardsWrapper } from './ServicesArea.css';
import { FlexContainer } from '../General/GeneralComponents.css';
import { ExperienceAreaConfig, TechnologyConfig } from '../../config/general';
import { TechnologyConfigType } from "../../utils/types";
import { TechnologyCard } from './ServiceCard/ServiceCard';
import { SeparatorPadding } from "../General/GeneralComponents.css";

export const ServicesArea: FC = () => {

    return (
        <ExperienceAreaWrapper >
            <TitleText >
                {ExperienceAreaConfig.title}
            </TitleText>
            <SeparatorPadding value={1.5} />
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
