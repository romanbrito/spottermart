import React from 'react'
import {Route, Switch} from 'react-router-dom'
import FrontPage from './FrontPage'
import Login from './containers/Login'
import Signup from './containers/Signup'
import CreateAsset from './containers/CreateAsset'
import UserAssetListPage from './containers/UserAssetListPage'
import UpdateAssetPage from './containers/UpdateAssetPage'

const Main = (props) => {
  const extraProps = props

  return (
    <Switch>
      <Route exact path='/' component={FrontPage}/>
      <Route exact path='/login' render={(props) =>
        <Login {...props} getId={extraProps.getId}/>
      }/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/create' component={CreateAsset}/>
      <Route exact path='/list' component={UserAssetListPage}/>
      <Route exact path='/update/:assetId' component={UpdateAssetPage}/>
    </Switch>
  )
}

export default Main