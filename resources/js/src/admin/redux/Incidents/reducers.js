import actions from "./actions";
const initState = {
    isLoading: false,
    isSuccess: false,
    errorMessage: false,
    rows: {},
    modalType: "none",
    row: {},

    isPrint: 2,
    printer: false,

    newUserId: null,
    // save and add
    saveAdd: false,
};

export default function userReducer(
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
                rows: payload.data.data.rows,
                count: payload.data.data.count,
                incidentDataInit:payload.data.incidentDataInit,
                errorMessage: false,
                printer: false,
                printerAll: payload.data.isPrint === 1 ? true : false,
                isPrint: 2,
            };
        case actions.LOAD_FORM_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: 'There is a loading problem',
            };
        case actions.TOGGLE_HANDLE_MODAL:
            
            return {
                ...state,
                modalActive: !state.modalActive,
                row: payload.data == null ? initState.row : payload.data,
                modalType: state.modalType
            };
        case actions.TOGGLE_HANDLE_MODAL_SUCCESS:
            if (payload.status === 'normal') {
                payload.status = 1;
            } else {
                payload.status = 2;
            }
            return {
                ...state,
                modalActive: !state.modalActive,
                newRow: payload.data == null ? initState.row : payload.data,
                modalType: payload.modalType,
                disable: true,
            };
        case actions.SAVE_INTO:
            return {
                ...state,
                isSuccess: false,
            };
        case actions.SAVE_INTO_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                roleStore: payload ? payload : initState.roleStore
            };
        case actions.TURN_OFF_PRINT:
            return {
                ...state,
                printer: payload,
                printerAll: payload === 1 ? true : false,
                isPrint: 2,
            };
        default:
            return state;
    }
}