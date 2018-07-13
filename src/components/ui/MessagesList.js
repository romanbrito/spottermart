import React from 'react'
import {Main, Section, Figure, Article, ReplyBtn, DeleteBtn} from './StyledMessagesList'

const MessagesList = (props) =>
  <Main>
    <Section>
      <Article>
        <p>
          message text
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

export default MessagesList