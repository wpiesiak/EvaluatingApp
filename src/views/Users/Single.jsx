import React from 'react'
import { Link, useParams } from 'react-router-dom'
import list from './usersList'

const SingleUser = () => {
    const { id } = useParams()
    const user = list.users[id]
    return (
        <div className="single-user">
            <div className="single-user__container">
                <h4>
                    {user.firstName} {user.lastName}, {user.age}
                </h4>
                <address>
                    {user.address.street}
                    <br />
                    {user.address.zipcode} {user.address.city} <br />
                    {user.address.state} {user.address.country}
                </address>
            </div>
            <Link to="/users">Back to list</Link>
        </div>
    )
}

export default SingleUser
