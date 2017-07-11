import React, { Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import App from '../app'
import Greetings from '../greetings'
import SignUp from '../signup/signup'

export default (
  <Route path='/' component={App}>
  <IndexRoute component={Greetings} />
  <Route path='/signup' component={SignUp} />
  </Route>
)
