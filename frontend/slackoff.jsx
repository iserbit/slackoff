/* eslint-disable no-console */
import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'

import Root from './components/root'
import configureStore from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  console.log('%cThank you for visiting SlackOff!  Please e-mail me at kevin.kik.lee@gmail.com for more information~', 'background: #ffffff color: #0000ff')

  const root = document.getElementById('root')
  Modal.setAppElement(document.body)

  let store = configureStore()

  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
      },
    }

    store = configureStore(preloadedState)
  }

  window.store = store

  ReactDOM.render(<Root store={store} />, root)
})
