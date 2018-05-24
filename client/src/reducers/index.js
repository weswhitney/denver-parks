/*
 * Reducers specify how the application's state changes in response to actions
 * 
 * The import statement is used to import bindings which are exported by another module.
 * Imported modules are in strict mode whether you declare them as such or not.
 * 
 * Given an object or value named combineReducers which has been exported from the module redux
 * either implicitly (because the entire module is exported) or explicitly (using the export statement),
 * this inserts combineReducers into the current scope.
 * 
 */
import { combineReducers } from 'redux'

/*
 * The export parameters specify individual named exports, while the import * as name syntax imports all of them
 * This inserts actions into the current scope,
 * containing all the exports from the module in the file located in ../actions/index.
 */
import * as actions from '../actions/index'

/* Reducers return new states */

function requests(
    state = { // default parameter for state
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

function playgroundRequests(
    state = {
        isFetching: false,
        items: [],
    },
    action,
) {
    switch (action.type) {
        case actions.FETCH_PLAYGROUND_LIST_REQUESTED:
            return { ...state, isFetching: true, }

        case actions.FETCH_PLAYGROUND_LIST_SUCCEEDED:
            return { ...state,
                items: action.data,
                isFetching: false,
        }

        case actions.FETCH_PLAYGROUND_LIST_FAILED:
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

function playgroundsReducer(state = {}, action) {
    switch (action.type) {
        case actions.FETCH_PLAYGROUND_LIST_REQUESTED:
        case actions.FETCH_PLAYGROUND_LIST_SUCCEEDED:
        case actions.FETCH_PLAYGROUND_LIST_FAILED:
            return Object.assign({}, state, playgroundRequests(state, action))
        default:
            return state
    }
}

const rootReducer = combineReducers({
    parksReducer,
    playgroundsReducer
})

export default rootReducer
