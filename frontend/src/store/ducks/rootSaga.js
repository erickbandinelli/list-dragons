import { all, takeLatest } from 'redux-saga/effects';
import { load } from './login/sagas';
import { loadDragons } from './dragons/sagas';

export default function* rootSaga() {
	return yield all([
		takeLatest('LOAD_REQUEST', load),
		takeLatest('LOAD_REQUEST_DRAGONS', loadDragons)
	])
}
