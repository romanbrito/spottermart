import React from 'react'
import {Link} from 'react-router-dom'
import {
  Main,
  Form,
  SignUpField,
  Legend,
  Email,
  EmailLabel,
  EmailInput,
  Password,
  PasswordLabel,
  PasswordInput,
  RememberMeLabel,
  Submit,
  SubmitBtn,
  SignUP,
  SignUpBtn,
} from './StyledLogin'

const Login = (props) =>
  <Main>
    <Form>
      <SignUpField>
        <Legend>Sign In</Legend>
        <Email>
          <EmailLabel htmlFor="email">Email</EmailLabel>
          <EmailInput
            type="email"
            name="email" id="email"
            onChange={e => props.onChange(e)}
            value={props.state["email"]}
          />
        </Email>
        <Password>
          <PasswordLabel htmlFor="password">Password</PasswordLabel>
          <PasswordInput
            type="password"
            name="password"
            id="password"
            onChange={e => props.onChange(e)}
            value={props.state["password"]}
          />
        </Password>
        <RememberMeLabel>
          <input type="checkbox"/> Remember me
        </RememberMeLabel>
      </SignUpField>
      <Submit>
        <SubmitBtn
          onClick={() => props.confirm()}
        >
          Submit
        </SubmitBtn>
      </Submit>
      <SignUP>
        <Link to='/signup'><SignUpBtn>Sign up</SignUpBtn></Link>
        <Link to='/signup'><SignUpBtn>Forgot your password?</SignUpBtn></Link>
      </SignUP>
    </Form>
  </Main>

export default Login