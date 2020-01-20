import {UPDATE_USER} from '../actions/user.actions';

const initialState = {
    user: {
        firstName: 'Tom',
        lastName: 'Smith',
        email: 'tom@smith.com',
        age: 27,
        address: {
            street: 'Some Street 35',
            city: 'Los Angeles',
            state: 'California',
            zipcode: '90210',
            country: 'USA'
        }
    }
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state;
    }
}
