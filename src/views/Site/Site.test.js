import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import Site from './Site'

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
                f
                <Site />
            </Provider>
        )
        expect(comp).toMatchSnapshot()
    })
})
