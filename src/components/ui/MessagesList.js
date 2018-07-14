import React from 'react'
import CreateMessage from '../containers/CreateMessage'
import {Main, Section, Article, DeleteBtn} from './StyledMessagesList'

const MessagesList = (props) => {

  return (
    props.list.map(list =>
      <Main key={list.cursor}>
        <Section>
          <Article>
            <p>
              {list.node.text}
            </p>
          </Article>

          <CreateMessage  title="Reply" postedBy={list.node.messageFrom.id}/>

          <DeleteBtn
            onClick={() => props.deleteMessage(list.node.id)}
          >
            Delete
          </DeleteBtn>
        </Section>
      </Main>
    )
  )

}

export default MessagesList