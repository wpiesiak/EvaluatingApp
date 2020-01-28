import { GET_USERS } from '../../actions/users/users.actions'

const initialState = { users: [] }

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            console.log(action)
            return Object.assign({}, state, {
                users: action.users,
            })
        default:
            return state
    }
}
