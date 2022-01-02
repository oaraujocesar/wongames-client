import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './Menu'

export default {
  title: 'Menu',
  component: Menu,
  args: {}
} as ComponentMeta<typeof Menu>

export const Default: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}
