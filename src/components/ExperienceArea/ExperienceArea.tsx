import { FC } from "react";
import { ExperienceAreaWrapper, TitleText, Wrapper, CurriculumVitaeText, TechnologyCardsWrapper, FlexContainer } from './ExperienceArea.css';
import { ExperienceAreaConfig, TechnologyConfig } from '../../config/general';
import { TechnologyConfigType } from "../../utils/types";
import { TechnologyCard } from './TechnologyCard/TechnologyCard';
import { saveAs } from 'file-saver';
import { SeparatorPadding } from "../General/GeneralComponents.css";

export const ExperienceArea: FC = () => {

    const handleDownloadAction = () => {
        const url = 'CV - Vass Richard-Daniel.pdf';
        const fileName = 'CV - Vass Richard-Daniel.pdf';

        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to download file");
            }

            return response.blob();
        })
        .then((blob) => {
            saveAs(blob, fileName);
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return (
        <ExperienceAreaWrapper >
            <Wrapper>
                <div></div>
                <TitleText >
                    {ExperienceAreaConfig.title}
                </TitleText>
                <CurriculumVitaeText onClick={handleDownloadAction}>
                    {ExperienceAreaConfig.curriculumVitae}
                </CurriculumVitaeText>
            </Wrapper>
            <SeparatorPadding value={1.5} />
            <TechnologyCardsWrapper>
                <FlexContainer positionType={"space-around"}>
                        {TechnologyConfig.map((technology: TechnologyConfigType) => {
                            return (
                                <TechnologyCard technology={technology}/>
                            );
                        })}
                </FlexContainer>
            </TechnologyCardsWrapper>
        </ExperienceAreaWrapper>
    )
};
