import { FC } from "react";
import { SeparatorSpace, ExperienceAreaWrapper, TitleText, CurriculumVitaeText, TechnologyCardsWrapper, FlexContainer } from './ExperienceArea.css';
import { ExperienceAreaConfig, TechnologyConfig } from '../../config/general';
import { TechnologyConfigType } from "../../utils/types";
import { TechnologyCard } from './TechnologyCard/TechnologyCard';
import { saveAs } from 'file-saver';

export const ExperienceArea: FC = () => {

    const handleDownloadAction = () => {
        const url = 'CV - Vass Richard.pdf';
        const fileName = 'CV - Vass Richard.pdf';

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
            <TitleText >
                {ExperienceAreaConfig.title}
            </TitleText>
            <CurriculumVitaeText onClick={handleDownloadAction}>
                {ExperienceAreaConfig.curriculumVitae}
            </CurriculumVitaeText>
            <SeparatorSpace />
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
