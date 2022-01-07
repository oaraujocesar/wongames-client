import { fireEvent, screen } from '@testing-library/react'
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
      screen.queryByLabelText(/adicionar a lista de desejos/i)
    ).toBeInTheDocument()

    expect(
      screen.queryByLabelText(/remover da lista de desejos/i)
    ).not.toBeInTheDocument()
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

    expect(screen.queryByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.queryByText(promotionalPrice)).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(
      screen.getByLabelText(/remover da lista de desejos/i)
    ).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()

    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% off"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.4rem',
      'font-size': '1.2rem'
    })
  })

  it('should NOT render a Ribbon if no ribbon props are passed', () => {
    renderWithTheme(<GameCard {...props} />)

    const ribbon = screen.queryByText(/20% off/i)

    expect(ribbon).not.toBeInTheDocument()
  })
})
