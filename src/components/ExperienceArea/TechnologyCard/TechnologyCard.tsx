import { FC, useState } from "react";
import { TechnologyCardContainer, TechnologyCardTitle, TechnologyCardWrapper, TechnologyCardWallpaper, MoreIconWrapper } from './TechnologyCard.css';
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
        <TechnologyCardContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <PopupExample isOpen={isPopupOpen} closePopup={closePopup} />
            <TechnologyCardWrapper onClick={openPopup}>
                <TechnologyCardWallpaper wallpaper={technology.wallpaper} />
                {/* <TechnologyCardMetadataWrapper> */}
                    <TechnologyCardTitle>{technology.title}</TechnologyCardTitle>
                    {/* <TechnologyCardDescription>{technology.description}</TechnologyCardDescription> */}
                    {isMoreIconShown && <MoreIconWrapper />}
                {/* </TechnologyCardMetadataWrapper> */}
            </TechnologyCardWrapper>
        </TechnologyCardContainer>
    )
};
