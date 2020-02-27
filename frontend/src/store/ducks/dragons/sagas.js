import { call, put } from 'redux-saga/effects';
import { api } from '../../../services/api';

import { loadSuccces, loadFailure } from './actions';

export function* loadDragons() {
	try {
		const response = yield call(api.get, '/dragon');
		yield put(loadSuccces(response.data));
	} catch (err) {
		yield put(loadFailure());
	}
}
