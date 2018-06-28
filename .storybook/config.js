import { configure } from '@storybook/react'

function loadStories() {
  require('../src/components/atoms/stories/index.stories')
  require('../src/components/molecules/stories/index.stories')
  require('../src/components/organisms/stories/index.stories')
  require('../src/components/templates/stories/index.stories')
  require('../src/components/pages/stories/index.stories')
}

configure(loadStories, module)
