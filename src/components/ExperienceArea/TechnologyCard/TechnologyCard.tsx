import { FC, useState } from "react";
import { TechnologyCardWrapper, TechnologyCardTitle, TechnologyCardWallpaperWrapper, TechnologyCardWallpaper, MoreIconWrapper } from './TechnologyCard.css';
import { TechnologyConfigType } from "../../../utils/types";
import { PopupExample } from "../../Pop-up/Pop-up";
import 'reactjs-popup/dist/index.css';

export type TechnologyCardType = {
    technology: TechnologyConfigType;
}

export const TechnologyCard: FC<TechnologyCardType> = ({ technology }) => {
    const [isMoreIconShown, setVisibility] = useState(false)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setIsPopupOpen(false);
      };


    const onMouseEnter = () => {
        setVisibility(true);
    };

    const onMouseLeave = () => {
        setVisibility(false);
    };

    return (
        <TechnologyCardWrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <PopupExample isOpen={isPopupOpen} closePopup={closePopup} />
            <TechnologyCardWallpaperWrapper onClick={openPopup}>
                <TechnologyCardWallpaper wallpaper={technology.wallpaper} />
                <TechnologyCardTitle>{technology.title}</TechnologyCardTitle>
                {isMoreIconShown && <MoreIconWrapper />}
            </TechnologyCardWallpaperWrapper>
        </TechnologyCardWrapper>
    )
};
