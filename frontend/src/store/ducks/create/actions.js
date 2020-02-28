export const createRequest = (formData) => {
	return {
		type: "CREATE_REQUEST",
		payload: { formData }
	}
}

export const createSuccces = (data) => {
	return {
		type: "CREATE_SUCCCES",
		payload: data
	}
}

export const createFailure = () => {
	return {
		type: "CREATE_FAILURE"
	}
}
