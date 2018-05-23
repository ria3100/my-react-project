import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import { AppContainer } from 'react-hot-loader'

import 'antd/dist/antd.css'

import Routes from './routes'
// import Stores from './stores'

import Count from './stores/Count'
const Stores = {
  count: new Count(),
}

ReactDOM.render(
  <AppContainer>
    <Provider {...Stores}>
      <Routes />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator && navigator.serviceWorker) {
    // if (isProduction) {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then(() => {
        // SW registered
      })
      .catch(() => {
        // SW registration failed
      })
    // } else {
    //   navigator.serviceWorker.getRegistrations().then(registrations => {
    //     registrations.forEach(registration => {
    //       registration.unregister()
    //     })
    //   })
    //   caches.keys().then(keys => {
    //     const promises = []

    //     keys.forEach(cacheName => {
    //       if (cacheName) {
    //         promises.push(caches.delete(cacheName))
    //       }
    //     })
    //   })
    // }
  }
})
