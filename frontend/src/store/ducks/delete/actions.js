export const deleteRequest = (id) => {
	return {
		type: "DELETE_REQUEST",
		payload: { id }
	}
}

export const deleteSuccces = (data) => {
	return {
		type: "DELETE_SUCCCES",
		payload: data
	}
}

export const deleteFailure = () => {
	return {
		type: "DELETE_FAILURE"
	}
}
