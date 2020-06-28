import actions from "./actions";
const initState = {
    isLoading: false,
    isSuccess: false,
    errorMessage: false,
    rows: {},
    row: {
        id: 0,
        displayname: 'a',
        email: '',
        password: '',
        created_at: localStorage.getItem('user_id'),
        edited_at: localStorage.getItem('user_id'),
    },

    checkList: {},

    newUserId: null,
    // save and add
    saveAdd: false,
    roles: [],
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
                rows: payload.data.rows,
                count: payload.data.count,
                errorMessage: false,
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
                checkList: payload === null ? initState.row : payload.rows,
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

        default:
            return state;
    }
}