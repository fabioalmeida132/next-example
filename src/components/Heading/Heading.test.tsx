import {screen} from '@testing-library/react'
import {renderTheme} from "../../styles/render-theme";
import {Heading} from "./index";
import { theme } from '../../styles/theme'

describe('<Heading/>', () => {
  it('should render with default values',() => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'texto'});

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none'
    })
  })

  it('should render with white color',() => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'texto'});

    expect(heading).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render correct heading sizes',() => {
    renderTheme(<Heading size={'small'}>texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'texto'});

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium
    })
  })

  it('should render with uppercase letters',() => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', {name: 'texto'});

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase'
    })
  })


})
