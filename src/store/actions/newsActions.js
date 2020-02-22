import axiosApi from '../../axios-instance';
import {
    ADD_POST_SUCCESS, FETCH_NEWS_FAILURE,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS, FETCH_POST_FAILURE, FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    REMOVE_POST_SUCCESS
} from "./actionTypes";

export const fetchNewsRequest = () => ({type: FETCH_NEWS_REQUEST});
export const fetchNewsSuccess = news => ({type: FETCH_NEWS_SUCCESS, news});
export const fetchNewsFailure = error => ({type: FETCH_NEWS_FAILURE, error});

export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
export const fetchPostRequest = () => ({type: FETCH_POST_REQUEST});
export const fetchPostFailure = error => ({type: FETCH_POST_FAILURE, error});

export const addPostSuccess = () => ({type: ADD_POST_SUCCESS});
export const removePostSuccess = (id) => ({type: REMOVE_POST_SUCCESS, id});

export const fetchNews  = () => async dispatch => {
    try {
        dispatch(fetchNewsRequest());
        const response = await axiosApi.get('/news');
        dispatch(fetchNewsSuccess(response.data));
    } catch (e) {
        dispatch(fetchNewsFailure(e));
    }
};

export const fetchPost  = (id) => async dispatch => {
    try {
        dispatch(fetchPostRequest());
        await axiosApi.post('/news', id);
        dispatch(fetchPostSuccess());
    } catch (e) {
        dispatch(fetchPostFailure(e));
    }
};

export const addPost  = (data) => async dispatch => {
    try {
        dispatch(fetchPostRequest());
        await axiosApi.post('/news', data);
        dispatch(addPostSuccess());
    } catch (e) {
        dispatch(fetchPostFailure(e));
    }
};

export const removePost  = (id) => async dispatch => {
    try {
        dispatch(fetchNewsRequest());
        await axiosApi.delete('/news/' + id);
        dispatch(removePostSuccess());
    } catch (e) {
        dispatch(fetchPostFailure(e));
    }
};