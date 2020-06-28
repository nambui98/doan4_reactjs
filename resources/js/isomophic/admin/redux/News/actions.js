const DOCUMENT = 'NEWS_';

const actions = {
    LOAD_DATA: DOCUMENT + 'LOAD_DATA',
    LOAD_DATA_SUCCESS: DOCUMENT + 'LOAD_DATA_SUCCESS',
    SAVE_INTO: DOCUMENT + 'SAVE_INTO',
    SAVE_INTO_SUCCESS: DOCUMENT + 'SAVE_INTO_SUCCESS',
    SAVE_INTO_ERROR: DOCUMENT + 'SAVE_INTO_ERROR',
    TOGGLE_HANDLE_MODAL: DOCUMENT + 'TOGGLE_HANDLE_MODAL',
    // save and add
    SAVE_ADD: DOCUMENT + 'SAVE_ADD',

    loadData: (data) => {
        return { type: actions.LOAD_DATA, payload: { data } };
    },
    loadDataSuccess: data => ({
        type: actions.LOAD_DATA_SUCCESS,
        payload: { data },
    }),
    saveInto: (data, actionName = 'insert') => ({
        type: actions.SAVE_INTO,
        payload: { data, actionName },
    }),

    toggleModal: (modalType, data = null) => ({
        type: actions.TOGGLE_HANDLE_MODAL,
        payload: { data },
        modalType: modalType
    }),
    saveIntoSuccess: error => ({
        type: actions.SAVE_INTO_SUCCESS,
        payload: { error },
    }),
    // save and add
    updateStatusSaveAdd : (data) => ({
      type: actions.SAVE_ADD,
      payload: data
    })
} 

export default actions;