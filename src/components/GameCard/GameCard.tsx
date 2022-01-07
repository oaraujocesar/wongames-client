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
  Price,
  Content
} from './styles'

export type GameCardProps = {
  title: string
  developer: string
  image: string
  price: string
  promotionalPrice?: string
}

const GameCard = ({
  title,
  developer,
  image,
  price,
  promotionalPrice
}: GameCardProps) => (
  <Wrapper>
    <ImageBox>
      <img src={image} alt={title} />
    </ImageBox>
    <Content>
      <Info>
        <Title>{title}</Title>
        <Developer>{developer}</Developer>
      </Info>
      <FavButton>
        <FavoriteBorder aria-label="Adicionar a lista de desejos" />
      </FavButton>
      <BuyBox>
        {!!promotionalPrice && <Price isPromotional>{price}</Price>}
        <Price>{promotionalPrice || price}</Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </BuyBox>
    </Content>
  </Wrapper>
)

export { GameCard }
