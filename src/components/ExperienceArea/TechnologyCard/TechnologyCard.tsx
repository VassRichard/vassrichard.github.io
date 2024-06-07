import { FC, useState } from "react";
import { TechnologyCardContainer, TechnologyCardMetadataWrapper, TechnologyCardTitle, TechnologyCardDescription, TechnologyCardWrapper, TechnologyCardWallpaper, TechnologyCardWallpaperOverlay, MoreIconWrapper } from './TechnologyCard.css';
import { TechnologyConfigType } from "../../../utils/types";
import { PopupExample } from "../../Pop-up/Pop-up";
import { useGetScreenSize } from "../../../utils/resolutions";
import { SeparatorMargin } from "../../General/GeneralComponents.css";

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
                <TechnologyCardWallpaper wallpaper={technology.wallpaper} />
                {!isSmallDevice && <TechnologyCardWallpaperOverlay isHovered={isHovered} />}
                <TechnologyCardMetadataWrapper>
                    <TechnologyCardTitle>{technology.title}</TechnologyCardTitle>
                    <SeparatorMargin value={0.1}/>
                    <TechnologyCardDescription>{technology.summary}</TechnologyCardDescription>
                </TechnologyCardMetadataWrapper>
                {technology.isEnabled && !isSmallDevice && <MoreIconWrapper isHovered={isHovered}/>}
            </TechnologyCardWrapper>
        </TechnologyCardContainer>
    )
};
