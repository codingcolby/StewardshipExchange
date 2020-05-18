const contactReducer = (state = {}, action) => {
	switch (action.type) {
		case "CLEAR_CONTACT":
			return "";
		default:
			return state;
	}
};

export default contactReducer;
