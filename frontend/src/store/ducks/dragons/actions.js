export const loadRequest = () => {
	return {
		type: "LOAD_REQUEST_DRAGONS"
	}
}

export const loadSuccces = (data) => {
	return {
		type: "LOAD_SUCCCES_DRAGONS",
		payload: data
	}
}

export const loadFailure = () => {
	return {
		type: "LOAD_FAILURE_DRAGONS"
	}
}
