import { combineReducers } from 'redux';

import Login from './login';
import Dragons from './dragons';
import Details from './details';
import Edit from './edit';
import Create from './create';
import Delete from './delete';
import CreateUser from './createUser';

export default combineReducers({
	Login,
	Dragons,
	Details,
	Edit,
	Create,
	Delete,
	CreateUser
})
