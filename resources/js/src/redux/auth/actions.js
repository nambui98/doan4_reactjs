const actions = {
	CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
	LOGIN_REQUEST: 'LOGIN_REQUEST',
	LOGOUT: 'LOGOUT',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_ERROR: 'LOGIN_ERROR',
	RESET_AVATA: 'RESET_AVATA',
	LOAD_BRANCH: 'LOAD_BRANCH',
	LOAD_BRACH_RESULT: 'LOAD_BRACH_RESULT',
	FORGET_PASS: 'FORGET_PASS',
	FORGET_PASS_SUCCESS: 'FORGET_PASS_SUCCESS',
	CONFIRM_PASS: 'CONFIRM_PASS',
	RESET_FORGOT: 'RESET_FORGOT',
	checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
	login: (newUser) => ({
		type: actions.LOGIN_REQUEST,
		newUser: newUser
	}),
	logout: () => ({
		type: actions.LOGOUT
	}),
	forget: (data) => ({
		type: actions.FORGET_PASS,
		data: data
	}),
	confirmPass: (obj) => ({
		type: actions.CONFIRM_PASS,
		data: obj
	}),
	resetAvata: (userImage) => ({
		type: actions.RESET_AVATA,
		userImage: userImage
	}),
	resetStatusForgot: (statusForgot) => ({
		type: actions.RESET_FORGOT,
		statusForgot: statusForgot
	})
};
export default actions;
