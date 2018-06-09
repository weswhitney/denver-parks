/*
 *
 * Redux/Sagas comments:
 * 
 * Action objects say this is what we want changed, and this is the value we want it changed to.
 * 
 *  action types:
 * Actions only describe what happened, but don't describe how the application's state changes
 * 
 * 
 * 
 * ES6 comments
 * 
 * The export statement is used when creating JavaScript modules to export this primitive string from the module
 * so they can be used by other programs with the import statement.
 * 
 * Constants are block-scoped, much like variables defined using the let statement.
 * The value of a constant cannot change through re-assignment, and it can't be redeclared.
 *
 * this code is assigning a string to a const and exporting it 
 * 
 */

export const FETCH_SKATE_PARKS_LIST_REQUESTED = 'FETCH_SKATE_PARKS_LIST_REQUESTED'  
export const FETCH_SKATE_PARKS_LIST_SUCCEEDED = 'FETCH_SKATE_PARKS_LIST_SUCCEEDED'
export const FETCH_SKATE_PARKS_LIST_FAILED = 'FETCH_SKATE_PARKS_LIST_FAILED' 
export const FETCH_PLAYGROUND_LIST_REQUESTED = 'FETCH_PLAYGROUND_LIST_REQUESTED'
export const FETCH_PLAYGROUND_LIST_SUCCEEDED = 'FETCH_PLAYGROUND_LIST_SUCCEEDED'
export const FETCH_PLAYGROUND_LIST_FAILED = 'FETCH_PLAYGROUND_LIST_FAILED'


/*
 * action creators
 * 
 * The export statement is used when creating JavaScript modules to export functions,
 * objects, or primitive values from the module so they can be used by other programs with the import statement.
 * 
 * A function being declared and exported with the name fetchSkateParkList
 * that returns an object with a property name of type and a value that evaluates to a string action type
 */

export function fetchSkateParksList() {
    return {
        type: FETCH_SKATE_PARKS_LIST_REQUESTED,
    }
}

export function fetchSkateParksListSucceded(data) {
    return {
        type: FETCH_SKATE_PARKS_LIST_SUCCEEDED, data: data
    }
}

export function fetchSkateParksListFailed(message) {
    return {
        type: FETCH_SKATE_PARKS_LIST_FAILED, message
    }
}

export function fetchPlaygroundsList() {
    return {
        type: FETCH_PLAYGROUND_LIST_REQUESTED,
    }
}

export function fetchPlaygroundsListSucceeded(data) {
    console.log('playground success in index.js | data ', data)
    return {
        type: FETCH_PLAYGROUND_LIST_SUCCEEDED, data: data
    }
}

export function fetchPlaygroundsListFailed(message) {
    return {
        type: FETCH_PLAYGROUND_LIST_FAILED, message
    }
}