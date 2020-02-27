export const loadRequestDetails = (id) => {
	return {
		type: "LOAD_REQUEST_DETAILS_DRAGONS",
		payload: { id }
	}
}

export const loadSucccesDetails = (data) => {
	return {
		type: "LOAD_SUCCCES_DETAILS_DRAGONS",
		payload: data
	}
}

export const loadFailureDetails = () => {
	return {
		type: "LOAD_FAILURE_DETAILS_DRAGONS"
	}
}
