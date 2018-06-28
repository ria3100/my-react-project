import React from 'react'
import { storiesOf } from '@storybook/react'

import Home from './Home.stories'
import About from './About.stories'
import Login from './Login.stories'
import Profile from './Profile.stories'

storiesOf('Pages', module)
  .add('Home', () => <Home />)
  .add('About', () => <About />)
  .add('Login', () => <Login />)
  .add('Profile', () => <Profile />)
