import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FrontPage from './FrontPage'

const Main  = () =>
    <Switch>
      <Route exact path='/' component={FrontPage}/>
    </Switch>

export default Main