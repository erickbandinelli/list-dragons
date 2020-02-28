export const editRequest = (formData, id) => {
	return {
		type: "EDIT_REQUEST",
		payload: { formData, id }
	}
}

export const editSuccces = (data) => {
	return {
		type: "EDIT_SUCCCES",
		payload: data
	}
}

export const editFailure = () => {
	return {
		type: "EDIT_FAILURE"
	}
}
