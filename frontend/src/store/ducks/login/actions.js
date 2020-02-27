export const loadRequest = (email, password) => {
	return {
		type: "LOAD_REQUEST",
		payload: { email, password }
	}
}

export const loadSuccces = (data) => {
	return {
		type: "LOAD_SUCCCES",
		payload: data
	}
}

export const loadFailure = () => {
	return {
		type: "LOAD_FAILURE"
	}
}
