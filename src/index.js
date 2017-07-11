import React, { Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'

import routes from './components/routes/routes'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore((state= {}) => state,
applyMiddleware(thunk));


render(
<Provider store={store} >
  <Router history={browserHistory} routes={routes} />
</Provider>  , document.getElementById('root'))
