import { FC, useState } from "react";
import { TechnologyCardContainer, TechnologyCardTitle, TechnologyCardWrapper, TechnologyCardWallpaper, TechnologyCardWallpaperOverlay, MoreIconWrapper } from './TechnologyCard.css';
import { TechnologyConfigType } from "../../../utils/types";
import { PopupExample } from "../../Pop-up/Pop-up";
import { useGetScreenSize } from "../../../utils/resolutions";

export type TechnologyCardType = {
    technology: TechnologyConfigType;
}

export const TechnologyCard: FC<TechnologyCardType> = ({ technology }) => {
    const { isMobile, isTablet } = useGetScreenSize();
    const isSmallDevice = isMobile() || isTablet();

    const [isHovered, setHover] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
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
            <PopupExample isOpen={isPopupOpen} closePopup={closePopup} />
            <TechnologyCardWrapper onClick={openPopup}>
                <TechnologyCardWallpaper wallpaper={technology.wallpaper} />
                {!isSmallDevice && <TechnologyCardWallpaperOverlay isHovered={isHovered} />}
                {/* <TechnologyCardMetadataWrapper> */}
                    <TechnologyCardTitle>{technology.title}</TechnologyCardTitle>
                    {/* <TechnologyCardDescription>{technology.description}</TechnologyCardDescription> */}
                    {!isSmallDevice && <MoreIconWrapper isHovered={isHovered}/>}
                {/* </TechnologyCardMetadataWrapper> */}
            </TechnologyCardWrapper>
        </TechnologyCardContainer>
    )
};
