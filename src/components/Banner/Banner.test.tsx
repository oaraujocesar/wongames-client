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
    renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /defy death/i, level: 2 })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3 }).innerHTML).toEqual(
      '<p>Play the new <strong>CrashLands</strong> season</p>'
    )
  })
})
