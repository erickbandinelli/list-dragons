import { all, takeLatest } from 'redux-saga/effects';
import { load } from './login/sagas';
import { loadDragons } from './dragons/sagas';
import { loadDetails } from './details/sagas';

export default function* rootSaga() {
	return yield all([
		takeLatest('LOAD_REQUEST', load),
		takeLatest('LOAD_REQUEST_DRAGONS', loadDragons),
		takeLatest('LOAD_REQUEST_DETAILS_DRAGONS', loadDetails)
	])
}
