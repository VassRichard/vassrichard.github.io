import { FC } from "react";
import { LandingAreaWrapper, PersonWrapper, DescriptionWrapper, RoleWrapper, FirstLine, SecondLine, Separator, RoleDescription, SeparatorSpace } from './LandingArea.css';
import { LandingAreaConfig } from '../../config/general';

export const LandingArea: FC = () => {
    return (
        <LandingAreaWrapper >
            <PersonWrapper />
            <DescriptionWrapper>
                <RoleWrapper>
                    <FirstLine>
                        {LandingAreaConfig.roleText.firstText}
                    </FirstLine>
                    <SecondLine>
                        {LandingAreaConfig.roleText.secondText}
                    </SecondLine>                    
                </RoleWrapper>
                <Separator />
                <RoleDescription>
                    {LandingAreaConfig.introText}
                    <SeparatorSpace marginValue={1}/>
                    {LandingAreaConfig.outroText}
                </RoleDescription>
            </DescriptionWrapper>
        </LandingAreaWrapper>
    )
};
