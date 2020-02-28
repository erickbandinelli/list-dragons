import { call, put } from 'redux-saga/effects';
import { apiLogin } from '../../../services/api';

import { createUserSuccces, createUserFailure } from './actions';

export function* createUser(action) {
	try {
		const response = yield call(apiLogin.post, `/register`, action.payload.formData);
		yield put(createUserSuccces(response));
	} catch (err) {
		yield put(createUserFailure());
	}
}
