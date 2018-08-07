import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR
} from '../actions/questions';


const initialState = {
  question: {},
  error: null,
  loading: false
}

const fetchQuestion = (state = initialState, action) => {
  if (action.type === FETCH_QUESTION_REQUEST) {
    return ({
      ...state,
      loading: true,
      error: null
    });
  }

  else if (action.type === FETCH_QUESTION_SUCCESS) {
    return ({
      ...state,
      loading: false,
      question: action.question
    });
  }

  else if (action.type === FETCH_QUESTION_ERROR) {
    return ({
      ...state,
      loading: false,
      error: action.error
    });
  }

  return state;
}

export default fetchQuestion;
