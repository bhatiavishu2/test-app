import React from 'react'
import { Comment } from './comment.jsx'

const _renderCommentList = (commentList) => {
    return commentList.map(({ userName, title, comment }, index) => (
        <Comment key={index} userName={userName} title={title} comment={comment} />
    ))
}

export const Comments = ({ comments = [] }) => {
    return (<div>
        {_renderCommentList(comments)}
    </div>)
}