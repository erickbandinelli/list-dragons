import Swal from 'sweetalert2';

const INITIAL_STATE = {
	data: [],
	error: false,
	loading: false
}

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CREATE_USER_REQUEST':
			return {
				...state,
				loading: true
			};
		case 'CREATE_USER_SUCCCES':
			localStorage.removeItem('jwt');

			if (action.payload.status === 200) {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Usuário criado com sucesso',
					showConfirmButton: false,
					timer: 2500
				});

				window.location.href = "http://localhost:3000";

			} else {
				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: 'Houve algum erro, tenet novamente mais tarde.',
					showConfirmButton: false,
					timer: 2500
				})
			}

			break;
		case 'CREATE_USER_FAILURE':
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
