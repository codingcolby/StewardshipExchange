const offersReducer = (state = [], action) => {
	switch (action.type) {
		case "SHOW_OFFERS":
			return action.payload;
		case "SHOW_USERSOFFERS":
			return action.payload;
		case "CLEAR_FORM":
			return "";
		default:
			return state;
	}
};

export default offersReducer;
