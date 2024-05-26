import { FC } from "react";
import { FooterContainer, FooterCopyright } from './Footer.css';

export const Footer: FC = () => {

    return (
        <FooterContainer >
            <FooterCopyright>
                Copyright&nbsp;&copy; {new Date().getFullYear()}&nbsp;Vass Richard. All rights reserved.
            </FooterCopyright>
        </FooterContainer>
    )
};