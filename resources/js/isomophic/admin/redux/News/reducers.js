import actions from './actions';
const initState = {
	isLoading: false,
	isSuccess: false,
	errorMessage: false,
	rows: {},
	row: {
		id: 0,
		title: '',
		category: 1,
		intro: '',
		image: '',
		content: '',
		publish_date: ''
	},
	content: '',

	newsType: [],
	// save and add
	saveAdd: false
};
export default function newsReducer(state = initState, { type, payload }) {
	console.log(payload);
	switch (type) {
		case actions.LOAD_DATA:
			return {
				...state,
				isLoading: true,
				errorMessage: false,
				modalActive: false
			};
		case actions.LOAD_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				rows: payload.data.data.rows,
				count: payload.data.data.count,
				errorMessage: false,
				newsType: payload.data.newsType
			};
		case actions.TOGGLE_HANDLE_MODAL:
			return {
				...state,
				row: payload.data == null ? initState.row : payload.data
			};
		case actions.SAVE_INTO:
			return {
				...state,
				isSuccess: false
			};
		case actions.SAVE_INTO_SUCCESS:
			return {
				...state,
				isSuccess: true
			};
		// save and add
		case actions.SAVE_ADD:
			return {
				...state,
				saveAdd: payload
			};
		default:
			return state;
	}
}
