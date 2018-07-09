import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import Home from './Home.stories'
import List from './List.stories'
import Article from './Article.stories'
import About from './About.stories'
import Login from './Login.stories'
import Profile from './Profile.stories'

storiesOf('Templates', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Home', () => <Home />)
  .add('List', () => <List />)
  .add('Article', () => <Article />)
  .add('About', () => <About />)
  .add('Login', () => <Login />)
  .add('Profile', () => <Profile />)
