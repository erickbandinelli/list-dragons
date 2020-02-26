import { all, takeLatest } from 'redux-saga/effects';
import { load } from './movies/sagas';
import { loadDetails } from './details/sagas';

export default function* rootSaga() {
	return yield all([
		takeLatest('LOAD_REQUEST', load),
		takeLatest('LOAD_REQUEST_DETAILS', loadDetails)
	])
}
