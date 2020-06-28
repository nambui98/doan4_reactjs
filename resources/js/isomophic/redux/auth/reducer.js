import actions from './actions';

const initState = {
	idToken: localStorage.hasOwnProperty('id_token') ? localStorage.getItem('id_token') : null,
	userId: localStorage.hasOwnProperty('user_id') ? localStorage.getItem('user_id') : null,
	userImage: localStorage.hasOwnProperty('user_image') ? localStorage.getItem('user_image') : null,
	branch: [],
	role_detail: [],
	user_name: '',
	roleId: null,
	statusForgot: ''
};
export default function authReducer(state = initState, action) {
	// console.log(action);
	// debugger;
	switch (action.type) {
		case actions.LOGIN_SUCCESS:
			return {
				...state,
				idToken: action.token,
				userId: action.userId,
				userImage: action.userImage,
				role_detail: action.role_detail,
				user_name: action.user_name
				// roleId: action.roleId
			};
		/*case actions.LOGOUT:
      return {
        idToken: null,
        userId: null,
        userImage: null,
        branch:[],
        roleId: null
      };*/
		case actions.RESET_AVATA:
			return {
				...state,
				user_imager: action.userImage
			};
		case actions.LOAD_BRACH_RESULT:
			return {
				...state,
				branch: action.payload
			};
		case actions.FORGET_PASS_SUCCESS:
			return {
				...state,
				statusForgot: action.statusForgot
			};
		case actions.RESET_FORGOT:
			return {
				...state,
				statusForgot: action.statusForgot
			};
		default:
			return state;
	}
}
