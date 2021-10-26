import styled, {css, DefaultTheme} from "styled-components";
import {HeadingProps} from "./index";

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.medium}
`,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.large}
`,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xlarge}
`,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xhuge};
    ${mediaFont(theme)};
`,
}

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;


const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'} ;
`

export const Title = styled.h1<HeadingProps>`
  ${({theme, colorDark, size, uppercase}) => css` 
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};

    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
