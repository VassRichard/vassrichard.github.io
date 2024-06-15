import { FC } from "react";
import { LandingAreaWrapper, FlexContainer, PersonWrapper, DescriptionWrapper, DefaultDescriptionText, DescriptionText } from './LandingArea.css';
import { LandingAreaConfig } from '../../config/general';
import { SeparatorMargin } from '../General/GeneralComponents.css';

export const LandingArea: FC = () => {

    return (
        <LandingAreaWrapper>
            <FlexContainer>
                <DescriptionWrapper>
                    <DefaultDescriptionText>{LandingAreaConfig.greetingText}</DefaultDescriptionText>
                    <SeparatorMargin value={0.1}/>
                    <DescriptionText>{LandingAreaConfig.nameText}</DescriptionText>
                    <SeparatorMargin value={0.1}/>
                    <DefaultDescriptionText>{LandingAreaConfig.locationText}</DefaultDescriptionText>
                </DescriptionWrapper>
                <PersonWrapper />
            </FlexContainer>
        </LandingAreaWrapper>
    )
};
