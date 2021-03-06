import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { getDetailedUser } from '../../redux/actions'
import { connect } from 'react-redux'
import { selectDetailedUser } from '../../redux/reducers/users.reducer'
import { useParams, withRouter } from 'react-router-dom'

const SingleUser = props => {
  const { id } = useParams()
  const { user, getUser } = props
  useEffect(() => {
    getUser(id)
  }, [])
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
      <button onClick={() => props.history.push('/users')}>
                Back to list
      </button>
    </div>
  )
}

SingleUser.propTypes = {
  user: PropTypes.object,
  getUser: PropTypes.func,
  history: PropTypes.object,
}

const mapStateToProps = state => ({
  user: selectDetailedUser(state),
})

const mapDispatchToProps = {
  getUser: getDetailedUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleUser)
