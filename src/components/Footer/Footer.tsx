import { FC } from "react";
import { FooterContainer, FooterCopyright } from './Footer.css';

export const Footer: FC = () => {

    return (
        <FooterContainer >
            <FooterCopyright>
                &nbsp;&copy; Vass Richard {new Date().getFullYear()}&nbsp;
                {/* Copyright&nbsp;&copy; {new Date().getFullYear()}&nbsp;Vass Richard */}
            </FooterCopyright>
        </FooterContainer>
    )
};