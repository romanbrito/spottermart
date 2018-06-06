import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FrontPage from './FrontPage'
import Login from './Login'

const Main  = () =>
    <Switch>
      <Route exact path='/' component={FrontPage}/>
      <Route exact path='/login' component={Login}/>
    </Switch>

export default Main