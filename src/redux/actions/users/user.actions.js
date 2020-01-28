import usersList from './usersList.json'
export const GET_USER = 'GET_USER'

export function getUser(userId) {
    const user = usersList.users[userId]
    return { type: GET_USER, user }
}
