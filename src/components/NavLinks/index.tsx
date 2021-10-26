import * as S from "./styles";
import {MenuLink, MenuLinkProps} from "../MenuLink";


export type NavLinksProps = {
  links?: MenuLinkProps[]
};


export const NavLinks = ({links = []}: NavLinksProps) => {
  return (
    <S.Container aria-label="Main menu">
      {links.map((link) => (
        <MenuLink {...link} key={link.link}/>
      ))}
    </S.Container>
  );
};
