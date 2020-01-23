import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'

class CommentForm extends React.Component {
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
                        />
                    </div>
                    <div className="col-md-4">
                        <button type="submit" className="btn btn-primary">
                            Add Comment
                        </button>
                    </div>
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
