import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { GameCard } from './GameCard'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  image: 'https://souce.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render the gamecard properly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title, level: 3 })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer, level: 4 })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.image
    )

    expect(
      screen.getByRole('button', { name: /adicionar a lista de desejos/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /R\$ 235,00/i })
    ).toBeInTheDocument()
  })
})
