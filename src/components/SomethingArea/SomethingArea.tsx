import { FC } from "react";
import { SomethingWrapper, DescriptionText } from './SomethingArea.css';
import { RoleCard } from './RoleCard/RoleCard';
import { SeparatorMargin, TitleText, FlexContainer } from '../General/GeneralComponents.css';
import { ExperienceConfig, RoleConfig } from '../../config/general';
import { RoleConfigType } from "../../utils/types";

export const SomethingArea: FC = () => {

    return (
        <SomethingWrapper>
            <TitleText>
                EXPERIENCE
            </TitleText>
            {/* <TechnologyCardsWrapper> */}
                <FlexContainer positionType={"space-around"}>
                        {RoleConfig.map((role: RoleConfigType) => {
                            return (
                                <RoleCard role={role}/>
                            );
                        })}
                </FlexContainer>
            {/* </TechnologyCardsWrapper> */}
        </SomethingWrapper>
    )
};
