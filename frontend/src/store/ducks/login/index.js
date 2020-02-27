import Swal from 'sweetalert2';

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
			if (action.payload.status === "success") {
				console.log('entrou 1')
				localStorage.setItem('jwt', action.payload.data.token);
				window.location.href = "list-dragons";
				return {
					...state,
					loading: false,
					error: false,
					data: action.payload
				};
			} else {
				console.log('entrou 2')
				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: action.payload.message,
					showConfirmButton: false,
					timer: 2500
				})
			}
			break;
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
