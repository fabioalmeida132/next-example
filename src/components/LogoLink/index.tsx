import * as S from "./styles";
import {Heading} from "../Heading";
import Link from 'next/link'

export type LogoLinkProps = {
  text: string,
  srcImg?: string,
  link: string,
  newTab?: boolean
};


export const LogoLink = ({text, srcImg = '', link, newTab = false}: LogoLinkProps) => {
  const nextLink = !!link.match(/^\//);
  const target = newTab ? '_blank' : '_self'


  if(nextLink){
    return (
      <Heading size="small" uppercase>
        <Link href={link} passHref>
          <S.Container target={target}>
            {!!srcImg && (<img src={srcImg} alt={text}/>)}
            {!srcImg && text}
          </S.Container>
        </Link>
      </Heading>
    )
  }

  return (
    <Heading size="small" uppercase>
      <Link href={link} passHref>
        <S.Container>
          {!!srcImg && (<img src={srcImg} alt={text}/>)}
          {!srcImg && text}
        </S.Container>
      </Link>
    </Heading>
  );
};
