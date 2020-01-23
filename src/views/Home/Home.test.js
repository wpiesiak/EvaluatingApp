import React from 'react'
import { render } from '@testing-library/react'
import Home from './Home'

test('renders home component', () => {
    const { getByText } = render(<Home />)
    const textElement = getByText(/home page/i)
    expect(textElement).toBeInTheDocument()
})

test('snapshot', () => {
    const comp = render(<Home />)
    expect(comp).toMatchSnapshot()
})
