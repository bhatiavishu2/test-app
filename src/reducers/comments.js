import { actionTypes } from '../actions/actiontypes'
const initialState = {
    commentList: [],
    route: 'commentList'
}

export const comments = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.NAVIGATE_TO_ADD_COMMENT:
            return { ...state, route: 'addComment' }
        case actionTypes.NAVIGATE_TO_COMMENT_LIST:
            return { ...state, route: 'commentList' }
        case actionTypes.ADD_COMMENTS:
            const newCommentList = [...state.commentList, action.payload.data]
            return { ...state, commentList: newCommentList }
        default:
            return state
    }
}