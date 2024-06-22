import { FC } from "react";
import { ExperienceAreaWrapper, HeadlineWrapper, TechnologyCardsWrapper } from './ServicesArea.css';
import { FlexContainer, TitleText } from '../General/GeneralComponents.css';
import { ServicesAreaConfig, TechnologyConfig } from '../../config/general';
import { TechnologyConfigType } from "../../utils/types";
import { TechnologyCard } from './TechnologyCard/TechnologyCard';
import { SeparatorPadding } from "../General/GeneralComponents.css";

export const ServicesArea: FC = () => {

    return (
        <ExperienceAreaWrapper >
            <HeadlineWrapper>
                <div></div>
                <TitleText >
                    {ServicesAreaConfig.title}
                </TitleText>
                <div></div>
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
