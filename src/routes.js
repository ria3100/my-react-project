import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { renderRoutes } from 'react-router-config'

import { Default } from '@/layouts'
import { Home, About, Login, Profile, Edit } from '@/pages'

const config = [
  {
    path: '/',
    component: Default,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/profile',
        component: Profile,
      },
      {
        path: '/edit',
        component: Edit,
      },
    ],
  },
]

const Routes = () => renderRoutes(config)
const history = createBrowserHistory()
export default () => (
  <Router history={history}>
    <Routes />
  </Router>
)
