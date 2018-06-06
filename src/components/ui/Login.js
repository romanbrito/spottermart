import React from 'react'

const Login = (props) =>
  <main className="pa4 black-80">
    <form className="measure center">
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="email"
            name="email" id="email"
            onChange={e => props.onChange(e)}
          />
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="password"
            name="password"
            id="password"
            onChange={e => props.onChange(e)}
          />
        </div>
        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>
      </fieldset>
      <div className="ph3">
        <p
          className="f6 link dim ph3 pv2 mb2 dib white bg-black pointer"
          onClick={() => props.confirm()}
        >
          Submit
        </p>
      </div>
      <div className="lh-copy mt3">
        <a href="#0" className="f6 link dim black db">Sign up</a>
        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
      </div>
    </form>
  </main>

export default Login