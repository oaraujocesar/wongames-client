import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './Menu'

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

export const Default: ComponentStory<typeof Menu> = () => <Menu />

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}
