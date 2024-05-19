import { FC } from "react";
import { ExperienceAreaWrapper, TitleText, CurriculumVitaeText, TechnologyCardsWrapper, FlexContainer } from './ExperienceArea.css';
import { ExperienceAreaConfig, TechnologyConfig } from '../../config/general';
import { TechnologyConfigType } from "../../utils/types";
import { TechnologyCard } from './TechnologyCard/TechnologyCard';
import { saveAs } from 'file-saver';

export const ExperienceArea: FC = () => {

    const handleDownloadAction = () => {
        const url = '../../assets/CV-VassRichard.pdf'
        const fileName = "CV - Vass Richard.pdf"

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
            <CurriculumVitaeText onClick={handleDownloadAction}>
                {ExperienceAreaConfig.curriculumVitae}
            </CurriculumVitaeText>
            <TitleText >
                {ExperienceAreaConfig.title}
            </TitleText>
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
