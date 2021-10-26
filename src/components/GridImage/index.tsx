import * as S from "./styles";
import {Heading} from "../Heading";
import {TextComponent} from "../TextComponent";
import {SectionBackground} from "../SectionBackground";

export type GridImageElementProps = {
  altText: string,
  srcImg: string,
}

export type GridImageProps = {
  title: string,
  description:string,
  grid: GridImageElementProps[],
  background?: boolean,
  sectionId?:string,
  component?: string
};


export const GridImage = ({title, description, grid, background = false, sectionId = ''}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map( el => (
            <S.GridElement key={el.srcImg}>
              <S.ImageNext src={el.srcImg} alt={el.altText} width="100%" height="100%"/>
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

