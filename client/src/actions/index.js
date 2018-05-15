
export const FETCH_SKATE_PARKS_LIST_REQUESTED = 'FETCH_SKATE_PARKS_LIST_REQUESTED'
export const FETCH_SKATE_PARKS_LIST_SUCCEEDED = 'FETCH_SKATE_PARKS_LIST_SUCCEEDED'
export const FETCH_SKATE_PARKS_LIST_FAILED = 'FETCH_SKATE_PARKS_LIST_FAILED'

export const FETCH_PLAYGROUND_LIST_REQUESTED = 'FETCH_PLAYGROUND_LIST_REQUESTED'
export const FETCH_PLAYGROUND_LIST_SUCCEEDED = 'FETCH_PLAYGROUND_LIST_SUCCEEDED'
export const FETCH_PLAYGROUND_LIST_FAILED = 'FETCH_PLAYGROUND_LIST_FAILED'

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

// my attempt from mark's example
export function fetchPlaygroundsList() {
    return {
        type: FETCH_PLAYGROUND_LIST_REQUESTED,
    }
}

export function fetchPlaygroundsListSucceeded(data) {
    return {
        type: FETCH_PLAYGROUND_LIST_SUCCEEDED, data: data
    }
}

export function fetchPlaygroundsListFailed(message) {
    return {
        type: FETCH_PLAYGROUND_LIST_FAILED, message
    }
}

