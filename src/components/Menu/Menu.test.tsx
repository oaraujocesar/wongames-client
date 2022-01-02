import { fireEvent, screen } from '@testing-library/react'
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

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    fireEvent.click(screen.getByLabelText(/abrir menu/i))

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/fechar menu/i))

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="cesar" />)

    expect(screen.getByText(/minha conta/i)).toBeInTheDocument()
    expect(screen.getByText(/lista de desejos/i)).toBeInTheDocument()

    expect(screen.queryByText(/crie sua conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/entrar/i)).not.toBeInTheDocument()
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/minha conta/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/lista de desejos/i)).not.toBeInTheDocument()

    expect(
      screen.getAllByText(/entrar/i)[1] as HTMLButtonElement
    ).toBeInTheDocument()
    expect(screen.getByText(/crie sua conta/i)).toBeInTheDocument()
  })
})
