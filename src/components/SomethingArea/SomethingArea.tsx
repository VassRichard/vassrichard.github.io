import { FC } from "react";
import { SomethingWrapper, TitleText, DescriptionText } from './SomethingArea.css';

export const SomethingArea: FC = () => {

    return (
        <SomethingWrapper>
            <TitleText >
                JUST YOU WAIT
            </TitleText>
            <DescriptionText size={1.5}>
                I will figure out what to put here eventually
            </DescriptionText>
        </SomethingWrapper>
    )
};
