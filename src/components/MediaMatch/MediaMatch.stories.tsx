import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MediaMatch } from './MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  args: {}
} as ComponentMeta<typeof MediaMatch>

export const Desktop: ComponentStory<typeof MediaMatch> = (args) => (
  <MediaMatch {...args}>Only on desktop</MediaMatch>
)

Desktop.args = {
  greaterThan: 'medium'
}

export const Mobile: ComponentStory<typeof MediaMatch> = (args) => (
  <MediaMatch {...args}>Only on mobile</MediaMatch>
)

Mobile.args = {
  lessThan: 'medium'
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
