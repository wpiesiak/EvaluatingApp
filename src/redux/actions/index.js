import { updateUser, UPDATE_USER } from './users/loggedUser.actions'
import { getUser, GET_USER } from './users/user.actions.js'
import { getUsers, GET_USERS } from './users/users.actions.js'
import { addComment, ADD_COMMENT } from './comment.actions'

export const actions = {
    updateUser,
    addComment,
    getUser,
    getUsers,
}

export const types = {
    UPDATE_USER,
    ADD_COMMENT,
    GET_USER,
    GET_USERS,
}
