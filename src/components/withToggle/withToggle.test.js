import React from 'react'
import withToggle from './withToggle'
import { fireEvent, render } from '@testing-library/react'

const MockComponent = props => {
  return (
    <div>
      {props.toggleStatus ? 'true' : 'false'}
      <button onClick={props.toggle}>Toggle</button>
    </div>
  )
}

const MockWithHoc = withToggle(MockComponent)

describe('withToggle HOC', () => {
  test('toggle status is true when toggle props is true ', () => {
    const component = render(<MockWithHoc />)
    const button = component.getByText('Toggle')

    expect(component.getByText('false')).toBeInTheDocument()
    fireEvent.click(button)
    expect(component.getByText('true')).toBeInTheDocument()
  })
})
