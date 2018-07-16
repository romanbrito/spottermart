import React from 'react'
import {
  Article,
  Form,
  SignUpFieldset,
  SignUpLegend,
  Name,
  NameLabel,
  NameInput,
  Email,
  EmailLabel,
  EmailInput,
  Password,
  PasswordLabel,
  PasswordInput,
  Submit,
  SubmitBtn
} from './StyledSignup'

const Signup = (props) =>
  <Article>
    <Form>
      <SignUpFieldset id="sign_up">
        <SignUpLegend>Sign Up</SignUpLegend>
        <Name>
          <NameLabel htmlFor="email">Name</NameLabel>
          <NameInput
            type="text"
            name="name"
            id="name"
            onChange={e => props.onChange(e)}
          />
        </Name>
        <Email>
          <EmailLabel htmlFor="email">Email address</EmailLabel>
          <EmailInput
            type="email"
            name="email"
            id="email"
            onChange={e => props.onChange(e)}
          />
        </Email>
        <Password>
          <PasswordLabel htmlFor="password">Password</PasswordLabel>
          <PasswordInput
            type="password"
            name="password"
            id="password"
            onChange={e => props.onChange(e)}
          />
        </Password>
      </SignUpFieldset>
      <Submit>
        <SubmitBtn
          onClick={() => props.confirm()}
        >
          Submit
        </SubmitBtn>
      </Submit>
    </Form>
  </Article>

export default Signup