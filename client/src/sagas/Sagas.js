import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import * as actions from '../actions/index'

export const fetchSkateParksApi = () => {
    return fetch('https://denver-parks-and-skateparks.herokuapp.com/skateparks', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        },
    ).then(response => response)
}

// ES6 Generator function
// worker Saga: will be fired on FETCH_SKATE_PARKS_LIST_REQUESTED actions
function* fetchSkateParksGenerator(action) {
    try {
        const skateParks = yield call(fetchSkateParksApi)
        yield put(actions.fetchSkateParksListSucceded(skateParks.data))
    } catch (e) {
        yield put(actions.fetchSkateParksListFailed(e.message))
    }
}

function* watchFetchSkateParksList() {
    yield takeLatest(actions.FETCH_SKATE_PARKS_LIST_REQUESTED, fetchSkateParksGenerator)
}

/*
 TakeLatest does not allow concurrent fetches. If request gets
 dispatched while a fetch is already pending, that pending fetch is cancelled
 and only the latest one will be run.
 */
// ES6 Generator function
function* rootSaga() {
    yield all([
        fork(watchFetchSkateParksList),
    ])
}

export default rootSaga