import React from 'react'
import User from './LoggedUser'
import store from '../../store'
import { Provider } from 'react-redux'
import { fireEvent, render } from '@testing-library/react'

describe('UserPage', () => {
    let userPage
    beforeEach(() => {
        userPage = render(
            <Provider store={store}>
                <User />
            </Provider>
        )
    })

    test('renders user component', () => {
        const textElement = userPage.getByText(/General info/i)
        expect(textElement).toBeInTheDocument()
    })

    test('snapshot', () => {
        expect(userPage).toMatchSnapshot()
    })

    test('with invalid form values', () => {
        fireEvent.click(userPage.getByText('Edit'))
        const firstNameField = userPage.getByLabelText(/First Name/i)
        const lastNameField = userPage.getByLabelText(/Last Name/i)
        const emailField = userPage.getByLabelText(/Email/i)
        const submitButton = userPage.getByText(/Accept/i)

        fireEvent.change(emailField, { target: { value: 'not an email' } })
        fireEvent.change(firstNameField, { target: { value: '' } })
        fireEvent.change(lastNameField, { target: { value: '' } })
        fireEvent.submit(submitButton)

        expect(userPage.getByText('First name is required')).toBeTruthy()
        expect(userPage.getByText('Last name is required')).toBeTruthy()
        expect(userPage.getByText('Invalid email address')).toBeTruthy()
    })
    test('user form submit properly', () => {
        fireEvent.click(userPage.getByText('Edit'))
        const nameInput = userPage.getByPlaceholderText('First Name')
        fireEvent.change(nameInput, { target: { value: 'Test' } })
        fireEvent.click(userPage.getByText('Accept'))
        expect(userPage.getByText('Test')).toBeInTheDocument()
    })
})
