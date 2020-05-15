const storyReducer = (state = {}, action) => {
	switch (action.type) {
		case "SHOW_STORY":
			return action.payload;
		default:
			return state;
	}
};

export default storyReducer;
