import { combineReducers } from 'redux'
import * as actions from '../actions/index'

/* Reducers return new states */

function requests(
    state = {
        isFetching: false,
        items: [],
    },
    action,
) {
    switch (action.type) {
        case actions.FETCH_SKATE_PARKS_LIST_REQUESTED:
            return { ...state, isFetching: true, }

        case actions.FETCH_SKATE_PARKS_LIST_SUCCEEDED:
            return { ...state,
                items: action.data,
                isFetching: false,
            }

        case actions.FETCH_SKATE_PARKS_LIST_FAILED:
            return { ...state, isFetching: false, }

        default:
            return state
    }
}

function parksReducer(state = {}, action) {
    switch (action.type) {
        case actions.FETCH_SKATE_PARKS_LIST_REQUESTED:
        case actions.FETCH_SKATE_PARKS_LIST_SUCCEEDED:
        case actions.FETCH_SKATE_PARKS_LIST_FAILED:
            return Object.assign({}, state, requests(state, action))
        default:
            return state
    }
}

const rootReducer = combineReducers({
    parksReducer,
})

export default rootReducer
