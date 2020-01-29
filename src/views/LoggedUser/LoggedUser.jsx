import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from '../../redux/actions'
import { selectLoggedUser } from '../../redux/reducers/users.reducer'
import withToggle from '../../components/withToggle'
import UserForm from './Form/Form'
import UserData from './Data'
import './style.scss'

class LoggedUser extends React.Component {
    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this)
    }
    formSubmit(data) {
        this.props.updateUser(data)
        this.props.toggle()
    }
    render() {
        const edit = this.props.toggleStatus
        return (
            <div className="user-page">
                {edit ? (
                    <UserForm
                        initialValues={this.props.user}
                        onSubmit={this.formSubmit}
                        toggleEdit={this.props.toggle}
                    />
                ) : (
                    <UserData
                        user={this.props.user}
                        toggleEdit={this.props.toggle}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: selectLoggedUser(state),
})

const mapDispatchToProps = dispatch => ({
    updateUser: user => actions.updateUser(user)(dispatch),
})

LoggedUser.propTypes = {
    user: PropTypes.object,
    updateUser: PropTypes.func,
    toggle: PropTypes.func,
    toggleStatus: PropTypes.bool,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withToggle(LoggedUser))
