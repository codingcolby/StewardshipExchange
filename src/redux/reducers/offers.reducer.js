const offersReducer = (state = [], action) => {
	switch (action.type) {
		case "SHOW_OFFERS":
			return action.payload;
		default:
			return state;
	}
};

export default offersReducer;
