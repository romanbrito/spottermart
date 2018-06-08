import React from 'react'
import {Route, Switch} from 'react-router-dom'
import FrontPage from './FrontPage'
import Login from './containers/Login'
import Signup from './containers/Signup'

const Main = (props) => {
  const extraProps = props

  return (
    <Switch>
      <Route exact path='/' component={FrontPage}/>
      <Route exact path='/login' render={(props) =>
        <Login {...props} getId={extraProps.getId}/>
      }/>
      <Route exact path='/signup' component={Signup}/>
    </Switch>
  )
}

export default Main