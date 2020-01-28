import { GET_USER } from '../../actions/users/user.actions'

const initialState = {
    user: {},
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return Object.assign({}, state, {
                user: action.user,
            })
        default:
            return state
    }
}
