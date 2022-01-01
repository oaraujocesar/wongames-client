import { ComponentStory, ComponentMeta } from '@storybook/react'
import Menu from './Menu'

export default {
  title: 'Menu',
  component: Menu,
  args: {}
} as ComponentMeta<typeof Menu>

export const Basic: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

Basic.args = {}

export const Default: ComponentStory<typeof Menu> = (args) => <Menu {...args} />
