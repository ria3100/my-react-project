import React from 'react'
import { storiesOf } from '@storybook/react'

import SmallArticleList from './SmallArticleList.stories'
import ArticleList from './SmallArticleList.stories'
import Article from './SmallArticleList.stories'
import Header from './Header.stories'
import HeaderMenu from './HeaderMenu.stories'
import Footer from './Footer.stories'
import Card from './Card.stories'

storiesOf('Organisms', module)
  .add('Header', () => <Header />)
  .add('HeaderMenu', () => <HeaderMenu />)
  .add('Footer', () => <Footer />)
  .add('SmallArticleList', () => <SmallArticleList />)
  .add('ArticleList', () => <ArticleList />)
  .add('Article', () => <Article />)
  .add('Card', () => <Card />)
