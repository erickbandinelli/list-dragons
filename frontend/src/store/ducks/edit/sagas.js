import { call, put } from 'redux-saga/effects';
import { api } from '../../../services/api';

import { editSuccces, editFailure } from './actions';

export function* editDragons(action) {
	try {
		const response = yield call(api.put, `/dragon/${action.payload.id}`, action.payload.formData);
		yield put(editSuccces(response));
	} catch (err) {
		yield put(editFailure());
	}
}
