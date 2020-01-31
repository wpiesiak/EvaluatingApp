import React from 'react'
import { render } from '@testing-library/react'
import { Router, Route } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import store from '../../store'
import SingleUser from './Single'

const exampleUser = {
    id: 0,
    firstName: 'John',
    lastName: 'Doe',
    age: 54,
    address: {
        street: '123 Main St',
        zipcode: '43-6572',
        city: 'San Diego',
        state: 'CA',
        country: 'United States',
    },
}

const exampleUser2 = {
    id: 2,
    firstName: 'Mark',
    lastName: 'El',
    age: 39,
    address: {
        street: 'Belvar street 56',
        zipcode: '20 4543',
        city: 'Toronto',
        state: 'TT',
        country: 'Canada',
    },
}

function renderWithRouterMatch(
    ui,
    {
        path = '/',
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
    } = {}
) {
    return {
        ...render(
            <Provider store={store}>
                <Router history={history}>
                    <Route path={path} component={ui} />
                </Router>
            </Provider>
        ),
    }
}

describe('Single User Page', () => {
    test('check if first user render with provided data', () => {
        const { getByText } = renderWithRouterMatch(SingleUser, {
            route: `/user/${exampleUser.id}`,
            path: '/user/:id',
        })
        const userFullName = `${exampleUser.firstName} ${exampleUser.lastName}, ${exampleUser.age}`
        expect(getByText(userFullName)).toBeInTheDocument()
    })
    test('check if second user renders with provided data', () => {
        const { getByText } = renderWithRouterMatch(SingleUser, {
            route: `/user/${exampleUser2.id}`,
            path: '/user/:id',
        })
        const userFullName = `${exampleUser2.firstName} ${exampleUser2.lastName}, ${exampleUser2.age}`
        expect(getByText(userFullName)).toBeInTheDocument()
    })
    test('non-existent id is given in parameter ', () => {
        const { getByText } = renderWithRouterMatch(SingleUser, {
            route: `/user/${10}`,
            path: '/user/:id',
        })
        expect(getByText('No user found with given id')).toBeInTheDocument()
    })
    test('back to list link', () => {
        const { getByText } = renderWithRouterMatch(SingleUser, {
            route: `/user/${1}`,
            path: '/user/:id',
        })
        const link = getByText('Back to list')
        expect(link.closest('a')).toHaveAttribute('href', '/users')
    })
})
