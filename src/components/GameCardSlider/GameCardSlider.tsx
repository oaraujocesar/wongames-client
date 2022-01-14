import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from '@styled-icons/material-outlined'

import { GameCard, GameCardProps } from 'components/GameCard/GameCard'
import { Slider, SliderSettings } from 'components/Slider/Slider'
import { Wrapper } from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'black' | 'white'
}

const settings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="próximos jogos" />,
  prevArrow: <ArrowLeft aria-label="jogos anteriores" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

const GameCardSlider = ({ items, color = 'black' }: GameCardSliderProps) => (
  <Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </Wrapper>
)

export { GameCardSlider }
