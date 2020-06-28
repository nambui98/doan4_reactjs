import actions from "./actions";
import clone from 'clone';
const initState = {
    isLoading: false,
    isSuccess: false,
    errorMessage: false,
    rows: {},
    row: {
        id: 0,
        username: 'a',
        email: '',
        password: '',
        created_at: localStorage.getItem('user_id'),
        edited_at: localStorage.getItem('user_id'),
    },

    newUserId: null,
    // save and add
    saveAdd: false,
    roles: [],
};

export default function accountReducer(
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
                rows: payload.data?payload.data.rows:"",
                count: payload.data?payload.data.count:"",
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
            return {
                ...state,
                modalActive: !state.modalActive,
                row: payload.data.payload == null ? initState.row : payload.data.payload,
                modalType: payload.data.modalType,
                roles: payload.data.roles,
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
        case actions.UPDATE_ROLE:
            return {
                ...state,
                listRoles: payload
            }
        // save and add
        case actions.SAVE_ADD:
            return {
                ...state,
                saveAdd: payload
            }
        case actions.CHECK_ROLE_DETAIL:
            const checkedIndex = clone(state.roles.findIndex(x => x.id === action.obj.id));
            if (checkedIndex > -1) {
                state.roles[checkedIndex].checked = !state.roles[checkedIndex].checked;
            }
            return {
                ...state,
                roles: [...state.roles],
            }
        default:
            return state;
    }
}