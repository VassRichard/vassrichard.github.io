import { FC } from "react";
import { FooterContainer, FooterCopyright, FooterCopyrightText } from './Footer.css';

export const Footer: FC = () => {

    return (
        <FooterContainer >
            <FooterCopyright>
                Copyright&nbsp;&copy; {new Date().getFullYear()}&nbsp;
                <FooterCopyrightText >
                    Vass Richard
                </FooterCopyrightText>
                . All rights reserved.
            </FooterCopyright>
        </FooterContainer>
    )
};