import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button/Button'
import {
  Developer,
  ImageBox,
  Info,
  Title,
  Wrapper,
  FavButton,
  BuyBox,
  Price
} from './styles'

export type GameCardProps = {
  title: string
  developer: string
  image: string
  price: string
}

const GameCard = ({ title, developer, image, price }: GameCardProps) => (
  <Wrapper>
    <ImageBox>
      <img src={image} alt={title} />
    </ImageBox>
    <Info>
      <Title>{title}</Title>
      <Developer>{developer}</Developer>
    </Info>
    <FavButton>
      <FavoriteBorder aria-label="Adicionar a lista de desejos" />
    </FavButton>
    <BuyBox>
      <Price>{price}</Price>
      <Button icon={<AddShoppingCart />} size="small" />
    </BuyBox>
  </Wrapper>
)

export { GameCard }
