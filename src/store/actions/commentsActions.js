import axiosApi from '../../axios-instance';
import {
    ADD_COMMENT_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS, REMOVE_COMMENT_SUCCESS
} from "./actionTypes";

export const fetchCommentsRequest = () => ({type: FETCH_COMMENTS_REQUEST});
export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const fetchCommentsFailure = error => ({type: FETCH_COMMENTS_FAILURE, error});
export const addCommentSuccess = () => ({type: ADD_COMMENT_SUCCESS});
export const removeCommentSuccess = (id) => ({type: REMOVE_COMMENT_SUCCESS, id});

export const fetchComments = (id) => async (dispatch) => {
    try {
        dispatch(fetchCommentsRequest());
        const response = await axiosApi.get('/comments?news_id=' + id);
        dispatch(fetchCommentsSuccess(response.data));
    } catch (e) {
        dispatch(fetchCommentsFailure(e));
    }
};

export const addComment = (data) => {
    return dispatch => {
        return axiosApi.post('/comments', data).then(
            () => {
                return dispatch(addCommentSuccess());
            });
    }
};

export const removeComment = (id) => {
    return dispatch => {
        return axiosApi.delete('/comments/' + id).then(
            () => {
                return dispatch(removeCommentSuccess(id));
            });
    }
};