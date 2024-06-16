import { FC } from "react";
import { ExperienceAreaWrapper, TitleText, HeadlineWrapper, TechnologyCardsWrapper } from './ExperienceArea.css';
import { FlexContainer } from '../General/GeneralComponents.css';
import { ExperienceAreaConfig, TechnologyConfig } from '../../config/general';
import { TechnologyConfigType } from "../../utils/types";
import { TechnologyCard } from './TechnologyCard/TechnologyCard';
import { SeparatorPadding } from "../General/GeneralComponents.css";

export const ExperienceArea: FC = () => {

    return (
        <ExperienceAreaWrapper >
            <HeadlineWrapper>
                <div></div>
                <TitleText >
                    {ExperienceAreaConfig.title}
                </TitleText>
            </HeadlineWrapper>
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
