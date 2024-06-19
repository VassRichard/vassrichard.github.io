import { FC } from "react";
import { SomethingWrapper, DescriptionText } from './SomethingArea.css';
import { SeparatorMargin, TitleText } from '../General/GeneralComponents.css';

export const SomethingArea: FC = () => {

    return (
        <SomethingWrapper>
            <TitleText>
                EXPERIENCE
            </TitleText>
            {/* <DescriptionText size={1.5}>
                I will figure out what to put here eventually
            </DescriptionText> */}
        </SomethingWrapper>
    )
};
