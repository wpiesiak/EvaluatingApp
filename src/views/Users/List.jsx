import PropTypes from 'prop-types'
import React from 'react'
import { getUsers } from '../../redux/actions'
import { connect } from 'react-redux'
import { selectUsersList } from '../../redux/reducers/users.reducer'

class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true,
    }
  }
  getUsers() {
    const usersRequest = new Promise((resolve, reject) => {
      resolve(this.props.getUsers())
    })
    usersRequest.then(()=> {
      this.setState({
        loading: false,
      })

    })
  }
  componentDidMount() {
    this.getUsers()
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
        {this.state.loading ? (
          <p>Loading....</p>
        ) : (
          <div className="users-list__container">
            {users && users.length ? (
              <ul>{users.map(user => this.renderUser(user))}</ul>
            ) : (
              <h3>No users found</h3>
            )}
          </div>
        )}
      </div>
    )
  }
}
UsersList.propTypes = {
  users: PropTypes.array,
  getUsers: PropTypes.func,
}

UsersList.defaltValues = {
  users: [],
}

const mapStateToProps = state => ({
  users: selectUsersList(state),
})

const mapDispatchToProps = {
  getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
