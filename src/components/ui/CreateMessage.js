import React from 'react'
import {withRouter} from 'react-router-dom'

const CreateMessage = withRouter((props) =>
  <article className="center mw5 mw6-ns br3 hidden ba b--black-10 mv4">
    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Message</h1>
    <div className="pa3 bt b--black-10">
      <textarea
        name="messageText"
        value={props.messageText}
        onChange={e => props.onChange(e)}
        className="f6 f5-ns lh-copy measure"/>
    </div>
    <section>
      <button
        onClick={(e) => props.submit()}
      >
        Submit
      </button>
      <button
        onClick={(e) => console.log('cancel')}
      >
        Cancel
      </button>
    </section>
  </article>)

export default CreateMessage