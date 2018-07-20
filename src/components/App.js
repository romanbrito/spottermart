import React, {Component} from 'react'
import {GC_AUTH_TOKEN, GC_USER_ID} from '../constants'
import {fetchQuery} from '../Environment'
import Header from './Header'
import Main from './Main'

class App extends Component {
  state = {
    userId: '',
    userName:''
  }

  componentWillMount() {
    this._getId()
  }

  render() {

    // get UserName
    if ( !this.state.userName ) {
      const userId = localStorage.getItem(GC_USER_ID)

      if (userId) this._getUserName(userId)

    }

    return (
      <div className="App">
        <Header userId={this.state.userId} removeId={this._removeId} userName={this.state.userName}/>
        <Main getId={this._getId} clearName={this._clearName}/>
      </div>
    );
  }

  _getId = () => {
    if (localStorage.getItem(GC_USER_ID)) {
      this.setState({
        userId: localStorage.getItem(GC_USER_ID)
      })
    }
  }

  _getUserName = (userId) => {

    _userInfo(userId).then(
      result => this.setState({userName: result.data.viewer.User.name})
    )

  }


  _removeId = () => {
    localStorage.removeItem(GC_USER_ID)
    localStorage.removeItem(GC_AUTH_TOKEN)
    this.setState({userId: '', userName: ''})
  }

  _clearName = () => {
    this.setState({userName: ''})
  }
}

export default App

// query to get username
const _userInfo = async (userId) => {
  const userQueryText = `
    query GetUserName($userId: ID!) {
      viewer {
        User(id:$userId){
          name
        }
      }
    }
    `
  const userInfoQuery = {text: userQueryText}

  const result = await fetchQuery(userInfoQuery,{userId})
  return result
}
