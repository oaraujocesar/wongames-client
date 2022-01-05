import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { Banner } from './Banner'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death/i, level: 2 })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3 }).innerHTML).toEqual(
      '<p>Play the new <strong>CrashLands</strong> season</p>'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
      <Banner
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
    renderWithTheme(<Banner {...props} />)

    const ribbon = screen.queryByText(/20% off/i)

    expect(ribbon).not.toBeInTheDocument()
  })
})
