import { all, takeLatest } from 'redux-saga/effects';
import { load } from './login/sagas';

export default function* rootSaga() {
	return yield all([
		takeLatest('LOAD_REQUEST', load)
	])
}
