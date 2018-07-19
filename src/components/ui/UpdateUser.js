import React from 'react'
import {withRouter} from 'react-router-dom'
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

const Updateuser = withRouter((props) =>
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
            value={props.state["name"]}
          />
        </Name>
        <Email>
          <EmailLabel htmlFor="email">Email address</EmailLabel>
          <EmailInput
            type="email"
            name="email"
            id="email"
            onChange={e => props.onChange(e)}
            value={props.state["email"]}
          />
        </Email>
        <button
          onClick={() => props.showPassword()}
        >
          Update Password
        </button>
        {props.state.showPassword &&
          <figure>
            <Password>
              <PasswordLabel htmlFor="old-password">Old Password</PasswordLabel>
              <PasswordInput
                type="password"
                name="oldPassword"
                id="old-password"
                onChange={e => props.onChange(e)}
                value={props.state["oldPassword"]}
              />
            </Password>
            <Password>
              <PasswordLabel htmlFor="password">New Password</PasswordLabel>
              <PasswordInput
                type="password"
                name="password"
                id="password"
                onChange={e => props.onChange(e)}
                value={props.state["password"]}
              />
            </Password>
            <Password>
              <PasswordLabel htmlFor="confirm-password">Confirm New Password</PasswordLabel>
              <PasswordInput
                type="password"
                name="confirmPassword"
                id="confirm-password"
                onChange={e => props.onChange(e)}
                value={props.state["confirmPassword"]}
              />
            </Password>
            <SubmitBtn
              onClick={() => props.updatePassword()}
            >
              Change password
            </SubmitBtn>
          </figure>
        }
      </SignUpFieldset>
      <Submit>
        <SubmitBtn
          onClick={() => props.confirm()}
        >
          Submit
        </SubmitBtn>
        <SubmitBtn
          onClick={() => props.history.push('/')}
        >
          Cancel
        </SubmitBtn>
      </Submit>
    </Form>
  </Article>
)

export default Updateuser