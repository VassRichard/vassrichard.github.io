import { FC } from "react";
import { TechnologyCardWrapper, TechnologyCardTitleWrapper, TechnologyCardTitle, TechnologyCardWallpaper} from './TechnologyCard.css';
import { TechnologyConfigType } from "../../../utils/types";

export type TechnologyCardType = {
    technology: TechnologyConfigType;
}

export const TechnologyCard: FC<TechnologyCardType> = ({ technology }) => {
    return (
        <TechnologyCardWrapper >
            <TechnologyCardTitleWrapper>
                <TechnologyCardTitle>{technology.title}</TechnologyCardTitle>
            </TechnologyCardTitleWrapper>
            <TechnologyCardWallpaper wallpaper={technology.wallpaper} />
        </TechnologyCardWrapper>
    )
};
