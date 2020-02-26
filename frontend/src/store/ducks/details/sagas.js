import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSucccesDetails, loadFailureDetails } from './actions';

export function* loadDetails(action) {
	try {
		const response = yield call(api.get, `/films/${action.payload.id}`);
		yield put(loadSucccesDetails(response.data));
	} catch (err) {
		yield put(loadFailureDetails());
	}
}
