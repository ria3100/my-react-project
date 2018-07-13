import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import SmallArticleList from './SmallArticleList.stories'
import ArticleList from './ArticleList.stories'
import ArticleEditor from './ArticleEditor.stories'
import Header from './Header.stories'
import HeaderMenu from './HeaderMenu.stories'
import Footer from './Footer.stories'
import Card from './Card.stories'

storiesOf('Organisms', module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add('Header', () => <Header />)
  .add('HeaderMenu', () => <HeaderMenu />)
  .add('Footer', () => <Footer />)
  .add('SmallArticleList', () => <SmallArticleList />)
  .add('ArticleList', () => <ArticleList />)
  .add('ArticleEditor', () => <ArticleEditor />)
  .add('Card', () => <Card />)
