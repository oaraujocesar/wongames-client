import { ComponentStory, ComponentMeta } from '@storybook/react'
import Highlight from './Highlight'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Red Dead está de volta!',
    subtitle: 'Veja as novas aventuras do John',
    backgroundImage: '/images/red-dead-img.jpg',
    buttonLabel: 'Comprar agora'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Highlight>

export const Default: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
)
