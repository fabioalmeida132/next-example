
import * as S from "./styles";
import {SectionBackground} from "../SectionBackground";
import {Heading} from "../Heading";
import {TextComponent} from "../TextComponent";

export type GridContentProps = {
  title: string,
  html: string,
  background?: boolean,
  sectionId?: string,
  component?: string
};


export const GridContent = ({title, html, background = false, sectionId = ''}: GridContentProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <S.Container>
        <Heading uppercase colorDark={!background} as="h2">{title}</Heading>
        <S.Hml>
          <TextComponent>{html}</TextComponent>
        </S.Hml>
      </S.Container>
    </SectionBackground>
  );
};
