import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleList from './ArticleList.stories'
import Header from './Header.stories'
import Footer from './Footer.stories'
import Mainvisual from './Mainvisual.stories'
import Card from './Card.stories'

storiesOf('Organisms', module)
  .add('Header', () => <Header />)
  .add('Footer', () => <Footer />)
  .add('ArticleList', () => <ArticleList />)
  .add('Mainvisual', () => <Mainvisual />)
  .add('Card', () => <Card />)
