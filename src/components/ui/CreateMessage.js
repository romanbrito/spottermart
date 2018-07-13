import React from 'react'
import {Modal, Header, ModalBody, Textarea, Footer} from './StyledCreateMessage'

const CreateMessage = (props) =>
  <Modal>
    <ModalBody>
      <Header>Message</Header>
      <Textarea
        name="messageText"
        value={props.messageText}
        onChange={e => props.onChange(e)}/>
      <Footer>
        <button
          onClick={(e) => props.submit()}
        >
          Submit
        </button>
        <button
          onClick={(e) =>props.closeMessage()}
        >
          Cancel
        </button>
      </Footer>
    </ModalBody>
  </Modal>

export default CreateMessage