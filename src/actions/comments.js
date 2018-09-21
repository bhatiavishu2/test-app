import { actionTypes } from './actiontypes'
export const addComment = ({ userName, title, comment }) => {
    return {
        type: actionTypes.ADD_COMMENTS,
        payload: {
            data: {
                userName,
                title,
                comment
            }
        }
    }
}

export const navigateToAddComment = () => {
    return {
        type: actionTypes.NAVIGATE_TO_ADD_COMMENT
    }
}

export const navigateToCommentList = () => {
    return {
        type: actionTypes.NAVIGATE_TO_COMMENT_LIST
    }
}