import Button from 'components/Button/Button'
import { Wrapper, Title, Subtitle, Content } from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  backgroundImage,
  buttonLink
}: HighlightProps) => (
  <Wrapper backgroundImage={backgroundImage}>
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
