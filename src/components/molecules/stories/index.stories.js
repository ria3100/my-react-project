import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import ArticleCard from './ArticleCard.stories'
import HeaderContent from './HeaderContent.stories'
import DateAndTags from './DateAndTags.stories'
import LoginForm from './LoginForm.stories'

storiesOf('Molecules', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('HeaderContent', () => <HeaderContent />)
  .add('DateAndTags', () => <DateAndTags />)
  .add('ArticleCard', () => <ArticleCard />)
  .add('LoginForm', () => <LoginForm />)
