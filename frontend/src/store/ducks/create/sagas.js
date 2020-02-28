import { call, put } from 'redux-saga/effects';
import { api } from '../../../services/api';

import { createSuccces, createFailure } from './actions';

export function* createDragons(action) {
	try {
		const response = yield call(api.post, `/dragon`, action.payload.formData);
		yield put(createSuccces(response));
	} catch (err) {
		yield put(createFailure());
	}
}
