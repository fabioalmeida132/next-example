import * as S from './styles'
import {ReactNode} from "react";

export type HeadingProps = {
  children: ReactNode,
  colorDark?: boolean,
  as?: 'h1'| 'h2'| 'h3'| 'h4'| 'h5'| 'h6',
  size?: 'small'|'medium'|'big'|'huge',
  uppercase?: boolean
}


export const Heading = ({
                          children,
                          colorDark = true,
                          as = 'h1',
                          size = 'huge',
                          uppercase = false
                        }: HeadingProps) => {
  return (
    <S.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>{children}</S.Title>
  )
}
