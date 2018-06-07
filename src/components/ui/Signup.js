import React from 'react'

const Signup = (props) =>
  <article className="pa4 black-80">
    <form action="sign-up_submit" method="get" acceptCharset="utf-8">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" htmlFor="email">Name</label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure"
            type="text"
            name="name"
            id="name"
            onChange={e => props.onChange(e)}
          />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" htmlFor="email">Email address</label>
          <input
            className="pa2 input-reset ba bg-transparent w-100 measure"
            type="email"
            name="email"
            id="email"
            onChange={e => props.onChange(e)}
          />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
          <input
            className="b pa2 input-reset ba bg-transparent"
            type="password"
            name="password"
            id="password"
            onChange={e => props.onChange(e)}
          />
        </div>
      </fieldset>
      <div className="mt3">
        <p
          className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer"
          onClick={() => props.confirm()}
        >
          Sign Up
        </p>
      </div>
    </form>
  </article>

export default Signup