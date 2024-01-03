import {
    CLEAR_ERRORS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    GET_BESTREVIEWS_FAIL,
    GET_BESTREVIEWS_REQUEST,
    GET_BESTREVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_RESET,
    NEW_REVIEW_SUCCESS,

} from '../constants/reviews_constant'
//reducer para dejar una opinion
export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case NEW_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
// REDUCER PARA VER LA LISTA DE REVIEWS O LAS MEJORES REVIEWS
export const reviewsReducer = (state = { reviews: [] }, action) => {
    switch (action.type) {
        case GET_REVIEWS_REQUEST:
            return {
                loading: true,
                reviews: []
            }

        case GET_REVIEWS_SUCCESS:
            return {
                loading: false,
                reviews: action.payload.reviews
            }

        case GET_REVIEWS_FAIL:
            return {
                loading: true,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
//REDUCER ELIMINAR REVIEW 
const initialState = {
    loading: false,
    success: false,
    error: null,
  };

 export const deleteReviewReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_REVIEW_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null,
        };
  
      case DELETE_REVIEW_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null,
        };
  
      case DELETE_REVIEW_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload, 
        };
  
      default:
        return state;
    }
  };