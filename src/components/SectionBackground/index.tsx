
import * as S from "./styles";
import {SectionContainer} from "../SectionContainer";
import {ReactNode} from "react";

const random = () => `id-${Math.random() * 1000}`.replace(/[^a-z0-9-_]/gi,'-');

export type SectionBackgroundProps = {
  children: ReactNode,
  background?: boolean,
  sectionId?: string
};


export const SectionBackground = ({children, background = false, sectionId = ''} : SectionBackgroundProps) => {


  const id = sectionId ? sectionId : random();
  return (
    <S.Container background={background} id={id}>
      <SectionContainer>
        {children}
      </SectionContainer>
    </S.Container>
  );
};

