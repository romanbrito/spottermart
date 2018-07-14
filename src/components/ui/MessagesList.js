import React from 'react'
import {Main, Section, Figure, Article, ReplyBtn, DeleteBtn} from './StyledMessagesList'

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
          <ReplyBtn>
            Reply
          </ReplyBtn>
          <DeleteBtn>
            Delete
          </DeleteBtn>
        </Section>
      </Main>
    )
  )

}

export default MessagesList