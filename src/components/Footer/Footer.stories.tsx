import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'Footer',
  component: Footer,
  args: {}
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)

Default.args = {}
