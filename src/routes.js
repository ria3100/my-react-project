import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { renderRoutes } from 'react-router-config'

import {
  HomePage,
  ArticlePage,
  EditPage,
  AboutPage,
  LoginPage,
  ProfilePage,
} from '@/components/pages'

const config = [
  {
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    path: '/article/:date',
    component: ArticlePage,
  },
  {
    path: '/edit',
    component: EditPage,
    routes: [
      {
        path: '/edit/:date',
        component: EditPage,
      },
    ],
  },
  {
    path: '/:category',
    component: HomePage,
    routes: [
      {
        path: '/:category/:page',
        component: HomePage,
      },
    ],
  },
  // {
  //   path: '/about',
  //   component: AboutPage,
  // },
  // {
  //   path: '/login',
  //   component: LoginPage,
  // },
  // {
  //   path: '/profile',
  //   component: ProfilePage,
  // },
]

const Routes = () => renderRoutes(config)
const history = createBrowserHistory()
export default () => (
  <Router history={history}>
    <Routes />
  </Router>
)
