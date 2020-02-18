import AddressSection from './Address'
import GeneralSection from './General'
import HobbySection from './Hobby'
import PropTypes from 'prop-types'
import React from 'react'
import { reduxForm } from 'redux-form'
import { validate } from './validate'

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
  handleSubmit: PropTypes.func.isRequired,
  toggleEdit: PropTypes.func,
  initialValues: PropTypes.object,
}

export default reduxForm({
  form: 'user',
  validate,
})(UserForm)
