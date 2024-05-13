import { FC } from "react";
import { LandingAreaWrapper, PersonWrapper, DescriptionWrapper, RoleWrapper, FirstLine, SecondLine, Separator, RoleDescription, SeparatorSpace } from './LandingArea.css';
import { LandingAreaConfig } from '../../config/general';
import { useGetScreenSize } from "../../utils/resolutions";

export const LandingArea: FC = () => {
    const { isMobile, isTablet } = useGetScreenSize();

    return (
        <LandingAreaWrapper isSmallDevice={isMobile() || isTablet()}>
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
