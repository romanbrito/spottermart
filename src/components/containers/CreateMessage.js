import React, {Component} from 'react'
import CreateMessageUi from '../ui/CreateMessage'

class CreateMessage extends Component {

  state = {
    text: ''
  }

  render () {

    return (
      <CreateMessageUi/>
    )
  }

}

export default CreateMessage