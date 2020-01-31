import { GET_USERS, GET_DETAILED_USER, UPDATE_USER } from '../actions/users.actions'

const initialState = {
  Users: {
    List: [],
    DetailedUser: {},
    LoggedUser: {
      firstName: 'Tom',
      lastName: 'Smith',
      email: 'tom@smith.com',
      age: 27,
      address: {
        street: 'Some Street 35',
        city: 'Los Angeles',
        state: 'California',
        zipcode: '90210',
        country: 'USA',
      },
      hobby: [' ', ' ', ' '],
    },
  },
}

export function users(state = initialState, action) {
  switch (action.type) {
  case GET_USERS:
    return Object.assign({}, state, {
      Users: {
        ...state.Users,
        List: action.users,
      },
    })
  case GET_DETAILED_USER:
    return Object.assign({}, state, {
      Users: {
        ...state.Users,
        DetailedUser: action.user,
      },
    })
  case UPDATE_USER:
    return Object.assign({}, state, {
      Users: {
        ...state.Users,
        LoggedUser: action.user,
      },
    })
  default:
    return state
  }
}

export const selectDetailedUser = state => state.users.Users.DetailedUser

export const selectLoggedUser = state => state.users.Users.LoggedUser

export const selectUsersList = state => state.users.Users.List
