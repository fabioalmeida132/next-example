import * as S from "./styles";
import Link from 'next/link'
import {ReactNode} from "react";

export type MenuLinkProps = {
  children: ReactNode,
  link: string,
  newTab?: boolean
};


export const MenuLink = ({children, link, newTab = false}: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self'
  const nextLink = !!link.match(/^\//);


  if(nextLink){
    return (
      <Link href={link} passHref>
        <S.Container target={target}>
          {children}
        </S.Container>
      </Link>

    )
  }

  return (
    <S.Container href={link} target={target}>
      {children}
    </S.Container>
  );
};
