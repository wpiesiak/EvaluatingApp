import PropTypes from 'prop-types'
import React from 'react'
import {reduxForm, Field} from 'redux-form'

class CommentForm extends React.Component {
  state = {
    commentInfo: '',
  }
  handleChange = e => {
    if (e.target.value.length < 10) {
      this.setState({
        commentInfo: 'try to write comment longer than 10 characters!',
      })
    } else {
      this.setState({
        commentInfo: 'Great! Your comment is long enogh!',
      })
    }
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.props.handleSubmit}>
        <Field
          component="input"
          name="added_by"
          type="hidden"
          value={this.props.user.firstName + ' ' + this.props.user.lastName}
        />
        <Field component="input" name="id" type="hidden" value={this.props.id}/>
        <Field
          component="input"
          name="timestamp"
          type="hidden"
          value={new Date().toISOString().substring(0, 10)}
        />
        <div className="form-group row">
          <div className="col-md-8">
            <Field
              className="form-control"
              component="textarea"
              label=""
              name="content"
              onChange={this.handleChange}
              placeholder="Type here..."
              type="text"
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary" type="submit">
              Add Comment
            </button>
          </div>
        </div>
        <div>
          <p className="comment-advice">{this.state.commentInfo}</p>
        </div>
      </form>
    )
  }
}

CommentForm.propTypes = {
  handleSubmit: PropTypes.func,
  user: PropTypes.object,
  id: PropTypes.number,
}

export default reduxForm({
  form: 'comment',
})(CommentForm)
