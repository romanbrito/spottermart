import { fromEvent, FunctionEvent } from 'graphcool-lib'
import { GraphQLClient } from 'graphql-request'
import * as bcrypt from 'bcryptjs'
import * as validator from 'validator'

interface User {
  id: string
}

interface EventData {
  id: string
  email: string
  password: string
  name: string
}

const SALT_ROUNDS = 10

export default async (event: FunctionEvent<EventData>) => {
  console.log(event)

  try {
    const graphcool = fromEvent(event)
    const api = graphcool.api('simple/v1')

    const { id, email, password, name } = event.data

    if (!validator.isEmail(email)) {
      return { error: 'Not a valid email' }
    }

    // check if user exists already
    // const userExists: boolean = await getUser(api, email)
    //   .then(r => r.User !== null)
    // if (userExists) {
    //   return { error: 'Email already in use' }
    // }

    // create password hash
    const salt = bcrypt.genSaltSync(SALT_ROUNDS)
    const hash = await bcrypt.hash(password, salt)

    // update user
    const userId = await updateGraphcoolUser(api, id, email, hash, name)

    // generate node token for new User node
    const token = await graphcool.generateNodeToken(userId, 'User')

    return { data: { id: userId, token } }
  } catch (e) {
    console.log(e)
    return { error: 'An unexpected error occured during update.' }
  }
}

async function getUser(api: GraphQLClient, email: string): Promise<{ User }> {
  const query = `
    query getUser($email: String!) {
      User(email: $email) {
        id
      }
    }
  `

  const variables = {
    email
  }

  return api.request<{ User }>(query, variables)
}

async function updateGraphcoolUser(api: GraphQLClient, id: string, email: string, password: string, name: string): Promise<string> {
  const mutation = `
    mutation updateGraphcoolUser($id: ID!, $email: String!, $password: String!, $name: String) {
      updateUser(
        id: $id,
        email: $email,
        password: $password,
        name: $name
      ) {
        id
      }
    }
  `

  const variables = {
    id,
    email,
    password: password,
    name
  }

  return api.request<{ updateUser: User }>(mutation, variables)
    .then(r => r.updateUser.id)
}