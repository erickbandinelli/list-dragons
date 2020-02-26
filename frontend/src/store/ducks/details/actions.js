export const loadRequestDetails = (id) => {
	return {
		type: "LOAD_REQUEST_DETAILS",
		payload: { id }
	}
}

export const loadSucccesDetails = (data) => {
	return {
		type: "LOAD_SUCCCES_DETAILS",
		payload: data
	}
}

export const loadFailureDetails = () => {
	return {
		type: "LOAD_FAILURE_DETAILS"
	}
}
