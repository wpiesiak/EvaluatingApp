import React from 'react'
import usersList from './usersList'

class UsersList extends React.Component {
    renderUser(user) {
        return (
            <li>
                <a href={`/user/${user.id}`}>
                    {user.firstName} {user.lastName}
                </a>
            </li>
        )
    }
    render() {
        return (
            <div className="users-list">
                <h2>List of all users</h2>
                <div className="users-list__container">
                    <ul>
                        {usersList.users.map(user => this.renderUser(user))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default UsersList
