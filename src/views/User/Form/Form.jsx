import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import GeneralSection from './General'
import AddressSection from './Address'
import HobbySection from './Hobby'
import { validate } from '../validate'

class UserForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit} className="user-form">
                <GeneralSection />
                <AddressSection />
                <HobbySection />
                <div className="mt-3 text-center">
                    <button
                        type="button"
                        className="btn btn-danger mr-3"
                        onClick={this.props.toggleEdit}
                    >
                        Cancel
                    </button>
                    <button className="btn btn-primary">Accept</button>
                </div>
            </form>
        )
    }
}

UserForm.propTypes = {
    handleSubmit: PropTypes.func,
}

export default reduxForm({
    form: 'user',
    validate,
})(UserForm)
