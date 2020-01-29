import {
    getDetailedUser,
    getUsers,
    updateUser,
    GET_DETAILED_USER,
    GET_USERS,
    UPDATE_USER,
} from './users.actions.js'
import { addComment, ADD_COMMENT } from './comment.actions'

export const actions = {
    addComment,
    getDetailedUser,
    getUsers,
    updateUser,
}

export const types = {
    ADD_COMMENT,
    GET_DETAILED_USER,
    GET_USERS,
    UPDATE_USER,
}
