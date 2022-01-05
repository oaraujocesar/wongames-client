import { ComponentStory, ComponentMeta } from '@storybook/react'
import Ribbon from './Ribbon'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as ComponentMeta<typeof Ribbon>

export const Default: ComponentStory<typeof Ribbon> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
