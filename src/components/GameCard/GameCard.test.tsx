import { screen } from '@testing-library/react'
import theme from 'styles/theme'
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
      screen.getByLabelText(/adicionar a lista de desejos/i)
    ).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).not.toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(price).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    const promotionalPrice = 'R$ 15,00'
    renderWithTheme(<GameCard {...props} promotionalPrice={promotionalPrice} />)

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText(promotionalPrice)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
