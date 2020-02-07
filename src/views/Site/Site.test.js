import React from 'react'
import Site from './Site'
import store from '../../store'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

describe('Site Page', () => {
    test('renders site component', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Site />)
            </Provider>
        )
        const textElement = getByText(/Article title/i)
        expect(textElement).toBeInTheDocument()
    })

    test('snapshot', () => {
        const comp = render(
            <Provider store={store}>
                <Site />
            </Provider>
        )
        expect(comp).toMatchSnapshot()
    })
})
