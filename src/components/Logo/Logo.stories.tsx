import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Logo } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  args: {}
} as ComponentMeta<typeof Logo>

export const Basic: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

Basic.args = {}
