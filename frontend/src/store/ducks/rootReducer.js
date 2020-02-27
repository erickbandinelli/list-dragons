import { combineReducers } from 'redux';

import Login from './login';
import Dragons from './dragons';
import Details from './details';

export default combineReducers({
	Login,
	Dragons,
	Details
})
