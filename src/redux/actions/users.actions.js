import usersList from './usersList.json'
export const GET_USERS = 'GET_USERS'
export const GET_DETAILED_USER = 'GET_DETAILED_USER'
export const UPDATE_USER = 'UPDATE_USER'

export const setUsers = users => ({
    type: GET_USERS,
    users,
})

export const setUser = user => ({
    type: GET_DETAILED_USER,
    user,
})

export const setUpdatedUser = user => ({
    type: UPDATE_USER,
    user,
})

export const getUsers = () => dispatch => {
    const users = usersList.users
    return dispatch(setUsers(users))
}

export const getDetailedUser = userId => dispatch => {
    const user = usersList.users[userId]
    return dispatch(setUser(user))
}

export const updateUser = user => dispatch => dispatch(setUpdatedUser(user))
