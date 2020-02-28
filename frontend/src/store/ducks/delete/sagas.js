import { call, put } from 'redux-saga/effects';
import { api } from '../../../services/api';

import { deleteSuccces, deleteFailure } from './actions';

export function* deleteDragons(action) {
	try {
		const response = yield call(api.delete, `/dragon/${action.payload.id}`);
		yield put(deleteSuccces(response));
	} catch (err) {
		yield put(deleteFailure());
	}
}
