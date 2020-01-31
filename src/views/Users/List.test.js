import React from 'react'
import UsersList from './List'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import usersList from '../../redux/actions/usersList'
import { render, waitForElement } from '@testing-library/react'

const initialState = {
  users: {
    Users: {
      List: usersList.users,
    },
  },
}

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const defaultStore = {
  store: mockStore(initialState),
}

const buildSetup = (TestComponent, store = {}) => (override = {}) => {
  return render(<TestComponent {...store} {...override} />)
}
const setup = buildSetup(UsersList, defaultStore)

describe('Users List Page', () => {
  test('Renders all users', async () => {
    const {getAllByRole} = setup()
    const usersLinks = await waitForElement(() => getAllByRole('link'))
    expect(usersLinks.length).toBe(initialState.users.Users.List.length)
  })
  test('Link redirect to proper url', async () => {
    const component = setup()
    const user = usersList.users[1]
    const link = await component.findByText(
      `${user.firstName} ${user.lastName}`
    )
    expect(link.closest('a')).toHaveAttribute('href', `/user/${user.id}`)
  })
  test('Renders no users message', async () => {
    const store = mockStore({ users: { Users: { List: [] } } })
    const component = setup({ store })
    expect(await component.findByText('No users found')).toBeInTheDocument()
  })
  test('show loading when data is not loaded yet', async () => {
    const { getByText, findByText } = setup()
    expect(getByText('Loading....')).toBeInTheDocument()
    const exampleUser = usersList.users[0]
    const userFullName = `${exampleUser.firstName} ${exampleUser.lastName}`
    expect(await findByText(userFullName)).toBeInTheDocument()

  })
  test('fetch users list on #componentDidMount', async () => {
    const { findByText } = setup()
    expect(
      await findByText(
        `${usersList.users[0].firstName} ${usersList.users[0].lastName}`
      )
    ).toBeInTheDocument()
  })
})
