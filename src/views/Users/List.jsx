import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { actions } from '../../redux/actions'

class UsersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        this.props.dispatch(actions.getUsers())
    }
    renderUser(user) {
        return (
            <li key={user.id}>
                <a href={`/user/${user.id}`}>
                    {user.firstName} {user.lastName}
                </a>
            </li>
        )
    }
    render() {
        const { users } = this.props
        return (
            <div className="users-list">
                <h2>List of all users</h2>
                <div className="users-list__container">
                    {users && users.length ? (
                        <ul>{users.map(user => this.renderUser(user))}</ul>
                    ) : (
                        <h3>No users found</h3>
                    )}
                </div>
            </div>
        )
    }
}
UsersList.propTypes = {
    users: PropTypes.array,
    dispatch: PropTypes.func,
}

UsersList.defaltValues = {
    users: [],
}

function mapStateToProps(state) {
    return {
        users: state.usersReducer.users,
    }
}

export default connect(mapStateToProps)(UsersList)
