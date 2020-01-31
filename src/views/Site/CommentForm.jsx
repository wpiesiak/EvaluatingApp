import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

class CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commentInfo: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
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
    // fields,
    // validate
    // initialValues: this.props.initialValues
})(CommentForm)
