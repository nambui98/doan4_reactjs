import actions from "./actions";
const initState = {
    isLoading: false,
    isSuccess: false,
    errorMessage: false,
    shopReportIncome:[],
    shopReportUserBook:[],
};

export default function dashboardReducer(
    state = initState,
    { type, payload, ...action }
) {
    switch (type) {
        case actions.LOAD_FORM:
            return {
                ...state,
                isLoading: true,
                errorMessage: false,
                modalActive: false,

            };
        case actions.LOAD_FORM_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: payload.data,
                // shopReportUserBook: payload.data.shopReportUserBook,
                // shopReportStatistics:payload.data.shopReportStatistics,
                errorMessage: false,
            };
        case actions.LOAD_FORM_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: 'There is a loading problem',
            };
        default:
            return state;
    }
}