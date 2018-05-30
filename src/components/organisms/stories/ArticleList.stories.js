import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { ArticleList } from '../'
import 'antd/dist/antd.css'

storiesOf('3. Organisms/ArticleList', module).add('normal', () => (
  <ArticleList />
))
