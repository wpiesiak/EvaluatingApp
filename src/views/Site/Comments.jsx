import React from "react";
import { connect } from 'react-redux';
import { actions } from "../../redux/actions";
import CommentForm from "./CommentForm";
import withToggle from '../../components/withToggle';

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
    }

    formSubmit(comment) {
        comment.id = this.props.comments.length;
        comment.added_by = this.props.user.firstName + ' ' + this.props.user.lastName;
        comment.timestamp = (new Date()).toISOString().substring(0,10);
        this.props.dispatch(actions.addComment(comment));
    }

    renderComment(comment) {
        return (
            <div className='comment' key={comment.id}>
                <div className='comment__info'>
                    <div className='comment__added_by'>{comment.added_by}</div>
                    <div className='comment__timestamp'>{comment.timestamp}</div>
                </div>
                <div className='comment__content'>{comment.content}</div>
            </div>
        )
    }

    render() {
        const limit = this.props.toggleStatus ? 100 : 1;
        const comments = [];
        Object.assign(comments, this.props.comments);
        return (
            comments &&
            <div className="comments-container">
                <h2>Comments</h2>
                <CommentForm
                    onSubmit={this.formSubmit}
                />
                {
                    comments.reverse().slice(0, limit).map(comment => {
                    return this.renderComment(comment)
                })
                }
                <button onClick={this.props.toggle} className='btn btn-primary'>
                    {this.props.toggleStatus ? 'Hide' : 'Show all'}
                </button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.commentsReducer.comments,
        user: state.userReducer.user,
    }
};

export default connect(mapStateToProps)(withToggle(Comments));

