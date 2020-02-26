const INITIAL_STATE = {
	data: [],
	error: false,
	loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOAD_REQUEST':
			return {
				...state,
				loading: true
			};
		case 'LOAD_SUCCCES':
			return {
				...state,
				loading: false,
				error: false,
				data: action.payload
			};
		case 'LOAD_FAILURE':
			return {
				...state,
				loading: false,
				error: true,
				data: []
			};
		default:
			return state;
	}
};

export default reducer;
