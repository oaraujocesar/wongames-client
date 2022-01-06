import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Highlight from './Highlight'

const props = {
  title: 'heading 1',
  subtitle: 'heading 2',
  backgroundImage: '/images/red-dead-img.jpg',
  buttonLabel: 'Comprar agora',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { level: 2, name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: /heading 2/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Comprar agora/i })
    ).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })
})
