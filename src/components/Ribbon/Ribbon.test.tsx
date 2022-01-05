import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Ribbon from './Ribbon'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
  })

  it('should render with the primary color if none is provided', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#F231A5'
    })
  })

  it('should render the with the secondary color if passed', () => {
    renderWithTheme(<Ribbon color="secondary">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
  })

  it('should render with the biggest size', () => {
    renderWithTheme(<Ribbon size="large">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '4rem',
      'font-size': '1.8rem'
    })
  })

  it('should render with the normal size', () => {
    renderWithTheme(<Ribbon>Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.3rem',
      'font-size': '1.4rem'
    })
  })

  it('should render with the normal size', () => {
    renderWithTheme(<Ribbon size="small">Best Seller</Ribbon>)

    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.4rem',
      'font-size': '1.2rem'
    })
  })
})
