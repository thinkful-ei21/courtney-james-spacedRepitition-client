import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const fetchQuestionRequest = () => ({
    type: FETCH_QUESTION_REQUEST
});

export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const fetchQuestionSuccess = question => ({
    type: FETCH_QUESTION_SUCCESS,
    question
});

export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';
export const fetchQuestionError = error => ({
    type: FETCH_QUESTION_ERROR,
    error
});

export const getQuestionData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    dispatch(fetchQuestionRequest());
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchQuestionSuccess(data)))
        .catch(err => dispatch(fetchQuestionError(err)));
};

export const getNextQuestion = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;

    dispatch(fetchQuestionRequest());
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(data => dispatch(fetchQuestionSuccess(data)))
        .catch(err => dispatch(fetchQuestionError(err)));
};
