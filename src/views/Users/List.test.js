import React from 'react'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import usersList from '../../redux/actions/users/usersList'
import UsersList from './List'

const initialState = {
    usersReducer: usersList,
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
    test('check if users render with provided data', () => {
        const { getByText } = setup()
        const exampleUser = usersList.users[0]
        const userFullName = `${exampleUser.firstName} ${exampleUser.lastName}`
        expect(getByText(userFullName)).toBeInTheDocument()
    })
    test('Test user link', () => {
        const component = setup()
        const user = initialState.usersReducer.users[1]
        const link = component.getByText(`${user.firstName} ${user.lastName}`)
        expect(link.closest('a')).toHaveAttribute('href', `/user/${user.id}`)
    })
    test('Render component without provided users', () => {
        const store = mockStore({ usersReducer: { users: [] } })
        const component = setup({ store })
        expect(component.getByText('No users found')).toBeInTheDocument()
    })
})
