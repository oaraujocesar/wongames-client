import { ComponentStory, ComponentMeta } from '@storybook/react'
import Highlight from './Highlight'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead está de volta!',
    subtitle: 'Veja as novas aventuras do John',
    backgroundImage: '/images/red-dead-img.jpg',
    buttonLabel: 'Comprar agora',
    buttonLink: '/games/rdr2'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Highlight>

export const Default: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: ComponentStory<typeof Highlight> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/images/red-dead-float.png'
}
