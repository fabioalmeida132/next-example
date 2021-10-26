import * as S from "./styles";
import {TextComponent} from "../TextComponent";
import {SectionContainer} from "../SectionContainer";

export type FooterProps = {
  footerHtml: string;
};


export const Footer = ({footerHtml}: FooterProps) => {
  return (

      <S.Container>
        <SectionContainer>
          <TextComponent>{footerHtml}</TextComponent>
        </SectionContainer>
      </S.Container>
  );
};

