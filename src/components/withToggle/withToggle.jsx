import React from 'react'

const withToggle = PassedComponent => {
    return class WithToggle extends React.Component {
       // static propTypes = {}

        state = {
            toggleStatus: false,
        }

        toggle() {
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
