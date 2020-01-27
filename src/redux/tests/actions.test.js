import { actions, types } from '../actions'

describe('actions', () => {
    it('should create new comment', () => {
        const comment = {
            id: 4,
            added_by: 'Test LoggedUser',
            timestamp: '2020-01-20',
            content: 'Test comment',
        }
        const expectedAction = {
            type: types.ADD_COMMENT,
            comment,
        }
        expect(actions.addComment(comment)).toEqual(expectedAction)
    })

    it('should update existing user', () => {
        const user = {
            firstName: 'Test',
            lastName: 'User',
            email: 'test@user.com',
            age: 35,
            address: {
                street: 'Test Street 54 / 7',
                city: 'Sydney',
                state: 'New South Wales',
                zipcode: '2000',
                country: 'Australia',
            },
        }
        const expectedAction = {
            type: types.UPDATE_USER,
            user,
        }
        expect(actions.updateUser(user)).toEqual(expectedAction)
    })
})
