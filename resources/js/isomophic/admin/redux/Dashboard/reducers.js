import actions from './actions';
const initState = {
	isLoading: false,
	isSuccess: false,
	errorMessage: false,
	shopReportIncome: [],
	shopReportUserBook: []
};

export default function dashboardReducer(state = initState, { type, payload, ...action }) {
	switch (type) {
		case actions.LOAD_FORM:
			return {
				...state,
				isLoading: true,
				errorMessage: false,
				modalActive: false
			};
		case actions.LOAD_FORM_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: payload.data.dataGraph,
				cartSuccess: payload.data.cartSuccess,
				cartDelivery: payload.data.cartDelivery,
				cartCancel: payload.data.cartCancel,
				totalCart: payload.data.totalCart,
				lostMoney: payload.data.lostMoney,
				soldMoney: payload.data.soldMoney,
				errorMessage: false
			};
		case actions.LOAD_FORM_ERROR:
			return {
				...state,
				isLoading: false,
				errorMessage: 'There is a loading problem'
			};
		default:
			return state;
	}
}
