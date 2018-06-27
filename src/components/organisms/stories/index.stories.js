import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleList from './ArticleList.stories'
import Header from './Header.stories'

storiesOf('Organisms', module)
  .add('ArticleList', () => <ArticleList />)
  .add('Header', () => <Header />)
