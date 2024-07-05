import { FC, useState } from "react";
import { TechnologyCardContainer, ServiceCardIcon, TechnologyCardTitle, TechnologyCardWrapper } from './ServiceCard.css';
import { TechnologyConfigType } from "../../../utils/types";
import { PopupExample } from "../../Pop-up/Pop-up";
import { useGetScreenSize } from "../../../utils/resolutions";
import { FlexColumn, FlexContainer } from "../../General/GeneralComponents.css";

export type TechnologyCardType = {
    technology: TechnologyConfigType;
}

export const TechnologyCard: FC<TechnologyCardType> = ({ technology }) => {
    const { isMobile, isTablet } = useGetScreenSize();
    const isSmallDevice = isMobile() || isTablet();

    const [isHovered, setHover] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(technology.isEnabled && true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };


    const onMouseEnter = () => {
        setHover(true);
    };

    const onMouseLeave = () => {
        setHover(false);
    };

    return (
        <TechnologyCardContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <PopupExample technology={technology} isOpen={isPopupOpen} closePopup={closePopup} />
            <TechnologyCardWrapper onClick={openPopup}>
                <FlexContainer positionType={"space-around"}>
                    <FlexColumn textAlign={"center"} columnPercentage={25}>
                        <ServiceCardIcon src={technology.icon} alt={technology.icon} />
                    </FlexColumn>
                    <FlexColumn textAlign={"center"} columnPercentage={75}>
                        <TechnologyCardTitle isHovered={isHovered}>{technology.title}</TechnologyCardTitle>
                    </FlexColumn>
                </FlexContainer>
            </TechnologyCardWrapper>
        </TechnologyCardContainer>
    )
};
