import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleCard from './ArticleCard.stories'
import LoginForm from './LoginForm.stories'

storiesOf('Molecules', module)
  .add('ArticleCard', () => <ArticleCard />)
  .add('LoginForm', () => <LoginForm />)
