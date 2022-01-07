import {
  AddShoppingCart,
  Favorite,
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
  favorite?: boolean
  onFav?: () => void
}

const GameCard = ({
  title,
  developer,
  image,
  price,
  promotionalPrice,
  favorite = false,
  onFav
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
      <FavButton onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remover da lista de desejos" />
        ) : (
          <FavoriteBorder aria-label="Adicionar a lista de desejos" />
        )}
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
