import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Menu from './Menu'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/buscar/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/ir para o carrinho de compras/i)
    ).toBeInTheDocument()
  })
})
