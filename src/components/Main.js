import React from 'react'
import {Route, Switch} from 'react-router-dom'
import FrontPage from './FrontPage'
import Login from './containers/Login'
import Signup from './containers/Signup'
import CreateAsset from './containers/CreateAsset'
import UserAssetListPage from './containers/UserAssetListPage'
import UpdateAssetPage from './containers/UpdateAssetPage'
import SearchPage from './containers/SearchPage'
import MessagesList from './ui/MessagesList'

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
      <Route exact path='/messages' component={MessagesList}/>
      <Route exact path='/search' component={SearchPage}/>
      <Route exact path='/update/:assetId' component={UpdateAssetPage}/>
      <Route exact path='/search/:filter' component={SearchPage}/>
    </Switch>
  )
}

export default Main