import React from 'react'
import UsersList from './List'
import configureStore from 'redux-mock-store'
import usersList from '../../redux/actions/usersList'
import { render } from '@testing-library/react'

const initialState = {
    users: {
        Users: {
            List: usersList.users,
        },
    },
}
const mockStore = configureStore()
const store = mockStore(initialState)
const defaultStore = {
    store: store,
}

const buildSetup = (TestComponent, store = {}) => (override = {}) => {
    return render(<TestComponent {...store} {...override} />)
}
const setup = buildSetup(UsersList, defaultStore)

describe('Users List Page', () => {
    test('Renders users properly', async () => {
        const { findByText } = setup()
        const exampleUser = usersList.users[0]
        const userFullName = `${exampleUser.firstName} ${exampleUser.lastName}`
        expect(await findByText(userFullName)).toBeInTheDocument()
        // this checks only if first user was rendered properly
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
        // what's interesting, you can uncomment the lines below, and the test will still pass
        // which means we can have situations of having users rendered and still see "Loading..."
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
