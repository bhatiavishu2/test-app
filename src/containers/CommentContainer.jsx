import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comments, AddComment } from '../components/comments';
import { navigateToAddComment, navigateToCommentList, addComment } from '../actions/comments'
class CommentContainer extends Component {
    handleSubmit(values) {
        this.props.addComment(values);
        this.props.navigateToCommentList();
    }
    handleCancel() {
        this.props.navigateToCommentList()
    }
    render() {
        const _renderComponent = ({ route, commentList }) => {
            if (route === 'addComment') {
                return (<AddComment onSubmit={this.handleSubmit.bind(this)} onCancel={this.handleCancel.bind(this)} />)
            }
            return (
                <div>
                    <div className="row mb-4">
                        <div className="col">
                            <button type="button" onClick={() => { this.props.navigateToAddComment() }} className="btn btn-primary">Add Comment</button>
                        </div>
                    </div>
                    <Comments comments={commentList} />
                </div>
            )
        }
        return (
            <div className='container m-5'>
                {_renderComponent(this.props.comments)}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        navigateToAddComment: () => { dispatch(navigateToAddComment()) },
        navigateToCommentList: () => { dispatch(navigateToCommentList()) },
        addComment: (data) => { dispatch(addComment(data)) }
    }
}
function mapStateToProps({ comments }) {
    return {
        comments
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
