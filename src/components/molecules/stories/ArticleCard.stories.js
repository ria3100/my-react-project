import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { ArticleCard } from '../'
import 'antd/dist/antd.css'

storiesOf('2. Molecules/ArticleCard', module).add('normal', () => (
  <ArticleCard item="aaa" />
))
