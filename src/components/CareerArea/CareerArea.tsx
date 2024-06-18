import { FC } from "react";
import { FooterContainer, FooterCopyright } from './CareerArea.css';

export const CareerArea: FC = () => {

    return (
        <FooterContainer >
            <FooterCopyright>
                {/* &nbsp;&copy; Vass Richard {new Date().getFullYear()}&nbsp; */}
                {/* Copyright&nbsp;&copy; {new Date().getFullYear()}&nbsp;Vass Richard */}
            </FooterCopyright>
        </FooterContainer>
    )
};