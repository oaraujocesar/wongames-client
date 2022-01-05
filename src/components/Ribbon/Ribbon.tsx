import { Wrapper } from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'small' | 'medium' | 'large'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'medium'
}: RibbonProps) => (
  <Wrapper color={color} size={size}>
    {children}
  </Wrapper>
)

export default Ribbon
