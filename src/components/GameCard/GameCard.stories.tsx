import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GameCard } from './GameCard'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    image: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as ComponentMeta<typeof GameCard>

export const Default: ComponentStory<typeof GameCard> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
