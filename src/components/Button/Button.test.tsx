import { screen } from '@testing-library/react'
import Button from './Button'

import { renderWithTheme } from 'utils/tests/helpers'

import { AddShoppingCart } from '@styled-icons/material-outlined'

describe('<Button />', () => {
  it('should render the button with the passed label', () => {
    renderWithTheme(<Button>Click me!</Button>)

    expect(
      screen.getByRole('button', { name: /Click me!/i })
    ).toBeInTheDocument()
  })

  it('should should render the biggest button', () => {
    renderWithTheme(<Button size="large">Click me!</Button>)

    expect(screen.getByRole('button', { name: /Click me!/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should should render the normal button as default', () => {
    const { container } = renderWithTheme(<Button>Click me!</Button>)

    expect(screen.getByRole('button', { name: /Click me!/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should should render the smallest button', () => {
    renderWithTheme(<Button size="small">Click me!</Button>)

    expect(screen.getByRole('button', { name: /Click me!/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should should render the full width button', () => {
    renderWithTheme(<Button fullWidth>Click me!</Button>)

    expect(screen.getByRole('button', { name: /Click me!/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should should render a button with an icon', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Click me!</Button>
    )

    expect(screen.getByText(/click me!/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Click me!
      </Button>
    )

    expect(screen.getByRole('link', { name: /click me!/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
