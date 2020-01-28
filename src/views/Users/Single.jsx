import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { actions } from '../../redux/actions'
import { Link, useParams } from 'react-router-dom'

const SingleUser = props => {
    const { id } = useParams()
    const { dispatch, user } = props
    useEffect(() => {
        dispatch(actions.getUser(id))
    })
    return (
        <div className="single-user">
            {user && Object.keys(user).length ? (
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
            ) : (
                <div className="single-user__message">
                    <h3>No user found with given id</h3>
                </div>
            )}
            <Link to="/users">Back to list</Link>
        </div>
    )
}

SingleUser.propTypes = {
    user: PropTypes.object,
    dispatch: PropTypes.func,
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
    }
}

export default connect(mapStateToProps)(SingleUser)
