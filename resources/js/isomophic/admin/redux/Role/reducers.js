import actions from './actions';

const initState = {
	isLoading: false,
	isSuccess: false,
	errorMessage: false,
	rows: {},
	row: {
		id: 0,
		name: '',
		address: '',
		strAddress: 'Address',
		createdBy: localStorage.getItem('user_id'),
		editedBy: localStorage.getItem('user_id')
	},
	// save and add
	saveAdd: false
};

export default function Unitreducer(state = initState, { type, payload }) {
	switch (type) {
		case actions.LOAD_DATA:
			return {
				...state,
				isLoading: true,
				errorMessage: false,
				modalActive: false
			};
		case actions.LOAD_DATA_SUCCESS:
			console.log(payload.data);

			return {
				...state,
				isLoading: false,
				rows: payload.data.rows,
				count: payload.data.count,
				errorMessage: false
			};
		case actions.TOGGLE_HANDLE_MODAL:
			return {
				...state,
				modalActive: !state.modalActive,
				row: payload.data == null ? initState.row : payload.data,
				modalType: state.modalType
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
