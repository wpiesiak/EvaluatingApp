import React from 'react'

const withToggle = PassedComponent => {
    return class WithToggle extends React.Component {
        state = {
            toggleStatus: false,
        }

        // toggle can be defined as fat arrow so there is no need to .bind(this) later
        toggle() {
          //when setting new state based on previous value, it's safer to use function argument
          // this.setState(({toggleStatus}) => ({ toggleStatus: !toggleStatus }))
            this.setState({
                toggleStatus: !this.state.toggleStatus,
            })
        }

        render() {
            return (
                <PassedComponent
                    {...this.props}
                    toggle={this.toggle.bind(this)}
                    toggleStatus={this.state.toggleStatus}
                />
            )
        }
    }
}

export default withToggle
