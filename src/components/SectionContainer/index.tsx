import * as S from "./styles";
import {ReactNode} from "react";

export type SectionContainerProps = {
  children: ReactNode,
};


export const SectionContainer = ({children}: SectionContainerProps) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

