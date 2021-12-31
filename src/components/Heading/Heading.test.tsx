import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from './Heading'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading if color prop is passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with the default size', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'font-size': '2.0rem'
    })
  })

  it('should render a heading with the proper size for screens greater than medium', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'font-size',
      '2.8rem',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should render a heading with a left green line', () => {
    renderWithTheme(
      <Heading color="black" lineLeft>
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#030517',
      borderLeft: '0.7rem solid #3CD3C1',
      paddingLeft: '0.8rem'
    })
  })

  it('should render a heading with a bottom pink line', () => {
    renderWithTheme(
      <Heading color="black" lineBottom>
        Won Games
      </Heading>
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
