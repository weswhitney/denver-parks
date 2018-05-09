
export const FETCH_SKATE_PARKS_LIST_REQUESTED = 'FETCH_SKATE_PARKS_LIST_REQUESTED'
export const FETCH_SKATE_PARKS_LIST_SUCCEEDED = 'FETCH_SKATE_PARKS_LIST_SUCCEEDED'
export const FETCH_SKATE_PARKS_LIST_FAILED = 'FETCH_SKATE_PARKS_LIST_FAILED'

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
