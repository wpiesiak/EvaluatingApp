import usersList from './usersList.json'
export const GET_USERS = 'GET_USERS'

export function getUsers() {
    const users = usersList.users
    return { type: GET_USERS, users }
}
