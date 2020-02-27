import { call, put } from 'redux-saga/effects';
import { apiLogin } from '../../../services/api';

import { loadSuccces, loadFailure } from './actions';

export function* load(formData) {
	try {
		const response = yield call(apiLogin.post, 'authenticate', formData.payload);
		yield put(loadSuccces(response.data));
	} catch (err) {
		yield put(loadFailure());
	}
}
