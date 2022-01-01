import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Default.args = {
  children: 'Buy now'
}

export const Icon: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

Icon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}
