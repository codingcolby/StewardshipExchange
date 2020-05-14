const loginMode = (state = "Login", action) => {
	switch (action.type) {
		case "SET_TO_LOGIN_MODE":
			return "Login";
		case "SET_TO_REGISTER_MODE":
			return "register";
		default:
			return state;
	}
};

// loginMode will be on the redux state at:
// state.loginMode
export default loginMode;
