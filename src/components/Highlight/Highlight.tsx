import Button from 'components/Button/Button'
import { Wrapper, Title, Subtitle, Content, FloatImage } from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  align?: 'left' | 'right'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  backgroundImage,
  floatImage,
  buttonLink,
  align = 'right'
}: HighlightProps) => (
  <Wrapper backgroundImage={backgroundImage} align={align}>
    {!!floatImage && <FloatImage src={floatImage} alt={title} />}
    <Content>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </Content>
  </Wrapper>
)

export default Highlight
