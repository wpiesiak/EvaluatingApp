import CommentForm from './CommentForm'
import PropTypes from 'prop-types'
import React from 'react'
import withToggle from '../../components/withToggle/withToggle'
import { addComment } from '../../redux/actions'
import { connect } from 'react-redux'
import { selectLoggedUser } from '../../redux/reducers/users.reducer'
import { selectComments } from '../../redux/reducers/comments.reducer'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit(comment) {
    comment.timestamp = new Date().toISOString().substring(0, 10)
    this.props.dispatch(addComment(comment))
  }

  renderComment(comment) {
    return (
      <div className="comment" key={comment.id}>
        <div className="comment__info">
          <div className="comment__added_by">{comment.added_by}</div>
          <div className="comment__timestamp">
            {comment.timestamp}
          </div>
        </div>
        <div className="comment__content">{comment.content}</div>
      </div>
    )
  }

  render() {
    const { comments, user } = this.props
    return (
      comments && (
        <div className="comments-container">
          <h2>Comments</h2>
          <CommentForm onSubmit={this.formSubmit} user={user} id={comments.length}/>
          {comments
            .map(comment => {
              return this.renderComment(comment)
            })}
          <button
            onClick={this.props.toggle}
            className="btn btn-primary"
          >
            {this.props.toggleStatus ? 'Hide' : 'Show all'}
          </button>
        </div>
      )
    )
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  user: PropTypes.object,
  dispatch: PropTypes.func,
  toggle: PropTypes.func,
  toggleStatus: PropTypes.bool,
}

Comments.defauProps = {
  comments: [],
  user: {},
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: selectComments(state, ownProps.toggleStatus),
    user: selectLoggedUser(state),
  }
}


export default withToggle(connect(mapStateToProps)(Comments))
