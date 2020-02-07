import PropTypes from 'prop-types'
import React from 'react'
import { reduxForm, Field } from 'redux-form'

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
            <form onSubmit={this.props.handleSubmit} className="comment-form">
                <div className="form-group row">
                    <div className="col-md-8">
                        <Field
                            label=""
                            name="content"
                            component="textarea"
                            type="text"
                            placeholder="Type here..."
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">
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
}

export default reduxForm({
    form: 'comment',
})(CommentForm)
