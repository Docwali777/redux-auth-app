import React, { Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'
import routes from './components/routes/routes'

render(
<Router history={browserHistory} routes={routes} />
  , document.getElementById('root'))
