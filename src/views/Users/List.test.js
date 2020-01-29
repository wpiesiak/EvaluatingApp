import React from 'react'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import usersList from '../../redux/actions/usersList'
import UsersList from './List'

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
    test('Renders users properly', () => {
        const { getByText } = setup()
        const exampleUser = usersList.users[0]
        const userFullName = `${exampleUser.firstName} ${exampleUser.lastName}`
        expect(getByText(userFullName)).toBeInTheDocument()
    })
    test('Link redirect to proper url', () => {
        const component = setup()
        const user = usersList.users[1]
        const link = component.getByText(`${user.firstName} ${user.lastName}`)
        expect(link.closest('a')).toHaveAttribute('href', `/user/${user.id}`)
    })
    test('Renders no users message', () => {
        const store = mockStore({ users: { Users: { List: [] } } })
        const component = setup({ store })
        expect(component.getByText('No users found')).toBeInTheDocument()
    })
})
