export const loadRequest = () => {
	return {
		type: "LOAD_REQUEST"
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
