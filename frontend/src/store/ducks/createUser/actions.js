export const createUserRequest = (formData) => {
	return {
		type: "CREATE_USER_REQUEST",
		payload: { formData }
	}
}

export const createUserSuccces = (data) => {
	return {
		type: "CREATE_USER_SUCCCES",
		payload: data
	}
}

export const createUserFailure = () => {
	return {
		type: "CREATE_USER_FAILURE"
	}
}
