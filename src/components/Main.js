import React from 'react'
import {Route, Switch} from 'react-router-dom'
import FrontPage from './FrontPage'
import Login from './containers/Login'
import Signup from './containers/Signup'

const Main  = () =>
    <Switch>
      <Route exact path='/' component={FrontPage}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
    </Switch>

export default Main