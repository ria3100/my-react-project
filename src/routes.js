import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { renderRoutes } from 'react-router-config'

import { Default } from './layouts'
import { Home, About, Login } from './pages'

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
