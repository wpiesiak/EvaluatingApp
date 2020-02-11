import { users } from '../reducers/users.reducer'
import { comments } from '../reducers/comments.reducer'
import { types } from '../actions/index.js'

const userToUpdate = {
    firstName: 'Test',
    lastName: 'Name',
    email: 'john@smith.com',
    age: 35,
    address: {
        street: 'Test 32',
        city: 'Test',
        state: 'Test',
        zipcode: '22356',
        country: 'Test',
    },
    hobby: ['test', 'test2', 'test3'],
}

const commentToAdd = {
    id: 0,
    content: 'Test',
    added_by: 'John Smith',
    timestamp: '2020-01-08'
}

describe('test users reducer', () => {
    it('should return the initial state', () => {
        expect(users(undefined, {})).toEqual({
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
        })
    })
    it('should handle UPDATE_USER', () => {
        expect(
            users(
                {},
                {
                    type: types.UPDATE_USER,
                    user: userToUpdate,
                }
            )
        ).toEqual({
            Users: {
                LoggedUser: userToUpdate,
            },
        })
    })
})

describe('test comments reducer', () => {
    it('should return initial state', () => {
        expect(comments(undefined, {})).toEqual({
            comments: [ // initial state could be exported and used here
                {
                    id: 0,
                    timestamp: '2020-01-02',
                    content:
                        'Curabitur accumsan ligula lectus, sed iaculis purus pellentesque hendrerit. Nunc massa risus, convallis ullamcorper tortor et, congue imperdiet quam.',
                    added_by: 'Alex Smirnoff',
                },
                {
                    id: 1,
                    timestamp: '2020-01-04',
                    content: 'Nulla ex nisl, finibus quis feugiat!',
                    added_by: 'Marta Ludvik',
                },
                {
                    id: 2,
                    timestamp: '2020-01-08',
                    content: 'Hallo! :) ',
                    added_by: 'Ernest Hemingway',
                },
            ],
        })
    })
    it('should handle ADD_COMMENT', () => {
        expect(
            comments(
                { comments: [] },
                {
                    type: types.ADD_COMMENT,
                    comment: commentToAdd,
                }
            )
        ).toEqual({
            comments: [commentToAdd],
        })
    })
})
