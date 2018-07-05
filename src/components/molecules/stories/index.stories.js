import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleCard from './ArticleCard.stories'
import HeaderContent from './HeaderContent.stories'
import LoginForm from './LoginForm.stories'

storiesOf('Molecules', module)
  .add('HeaderContent', () => <HeaderContent />)
  .add('ArticleCard', () => <ArticleCard />)
  .add('LoginForm', () => <LoginForm />)
