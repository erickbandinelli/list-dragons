import { all, takeLatest } from 'redux-saga/effects';
import { load } from './login/sagas';
import { loadDragons } from './dragons/sagas';
import { loadDetails } from './details/sagas';
import { editDragons } from './edit/sagas';
import { createDragons } from './create/sagas';
import { createUser } from './createUser/sagas';
import { deleteDragons } from './delete/sagas';

export default function* rootSaga() {
	return yield all([
		takeLatest('LOAD_REQUEST', load),
		takeLatest('LOAD_REQUEST_DRAGONS', loadDragons),
		takeLatest('LOAD_REQUEST_DETAILS_DRAGONS', loadDetails),
		takeLatest('EDIT_REQUEST', editDragons),
		takeLatest('CREATE_REQUEST', createDragons),
		takeLatest('DELETE_REQUEST', deleteDragons),
		takeLatest('CREATE_USER_REQUEST', createUser)
	])
}
