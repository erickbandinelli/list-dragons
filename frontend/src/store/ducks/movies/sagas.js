import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccces, loadFailure } from './actions';

export function* load() {
	try {
		const response = yield call(api.get, '/films');
		yield put(loadSuccces(response.data.results));
	} catch (err) {
		yield put(loadFailure());
	}
}
