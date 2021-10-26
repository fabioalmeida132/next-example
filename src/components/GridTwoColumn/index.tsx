import * as S from "./styles";
import {SectionBackground} from "../SectionBackground";
import {Heading} from "../Heading";
import {TextComponent} from "../TextComponent";

export type GridTwoColumnProps = {
  title: string,
  text: string,
  srcImg: string,
  background?: boolean,
  sectionId?: string,
  component?: string
};


export const GridTwoColumn = ({title, text, srcImg, background = false, sectionId = ''}: GridTwoColumnProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <S.Container>
        <S.TextContainer >
          <Heading uppercase colorDark={!background} as="h2">{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </S.TextContainer>
        <S.ImageContainer>
          <S.ImageNext src={srcImg} alt="Capa principal site"  width="100%" height="100%"/>
        </S.ImageContainer>
      </S.Container>
    </SectionBackground>
  );
};
