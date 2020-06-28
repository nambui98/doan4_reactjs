const DOCUMENT = 'USER_ANNOUCEMENT_';
const actions = {
    LOAD_FORM: DOCUMENT + 'LOAD_FORM',
    LOAD_FORM_SUCCESS: DOCUMENT + 'LOAD_FORM_SUCCESS',
    LOAD_FORM_ERROR: DOCUMENT + 'LOAD_FORM_ERROR',

    SAVE_INTO: DOCUMENT + 'SAVE_INTO',
    SAVE_INTO_SUCCESS: DOCUMENT + 'SAVE_INTO_SUCCESS',
    SAVE_INTO_ERROR: DOCUMENT + 'SAVE_INTO_ERROR',

    TOGGLE_HANDLE_MODAL: DOCUMENT + 'TOGGLE_HANDLE_MODAL',
    TOGGLE_HANDLE_MODAL_SUCCESS: DOCUMENT + 'TOGGLE_HANDLE_MODAL_SUCCESS',
    TURN_OFF_PRINT: DOCUMENT + 'TURN_OFF_PRINT',
    loadData: (data) => {
        return { type: actions.LOAD_FORM, payload: { data } };
    },
    loadDataSuccess: data => ({
        type: actions.LOAD_FORM_SUCCESS,
        payload: { data },
    }),

    loadDataError: error => ({
        type: actions.LOAD_FORM_ERROR,
        payload: { error },
    }),

    toggleModal: (modalType, data = null) => ({
        type: actions.TOGGLE_HANDLE_MODAL,
        payload: { data },
        modalType: modalType
    }),

    toggleModalSuccess: (data = null) => ({
        type: actions.TOGGLE_HANDLE_MODAL_SUCCESS,
        payload: { data }
    }),

    saveInto: (data, actionName = 'insert') => ({
        type: actions.SAVE_INTO,
        payload: { data, actionName },
    }),

    saveIntoSuccess: error => ({
        type: actions.SAVE_INTO_SUCCESS,
        payload: { error },
    }),
    turnOffPrint: data => ({
        type: actions.TURN_OFF_PRINT,
        payload: data
    }),
};

export default actions;