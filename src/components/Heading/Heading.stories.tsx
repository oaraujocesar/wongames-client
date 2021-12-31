import { ComponentStory, ComponentMeta } from '@storybook/react'
import Heading from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Heading>

export const Default: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
)

Default.args = {
  children: 'Most Populars'
}
