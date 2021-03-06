import {ADD_COMMENT} from '../actions/comment.actions'

export const initialState = {
  comments: [
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
}

export function comments(state = initialState, action) {
  switch (action.type) {
  case ADD_COMMENT:
    return Object.assign({}, state, {
      comments: [...state.comments, action.comment],
    })
  default:
    return state
  }
}

export const selectComments = (state, toggleStatus) => {
  const limit = toggleStatus ? 100 : 1
  const comments = [...state.comments.comments]
  return comments
    .reverse()
    .slice(0, limit)
}
