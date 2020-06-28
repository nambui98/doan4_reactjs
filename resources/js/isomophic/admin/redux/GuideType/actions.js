const DOCUMENT = 'GUIDE_TYPE_';
const actions = {
  LOAD_FORM: DOCUMENT + 'LOAD_FORM',
  LOAD_FORM_SUCCESS: DOCUMENT + 'LOAD_FORM_SUCCESS',
  LOAD_FORM_ERROR: DOCUMENT + 'LOAD_FORM_ERROR',

  SAVE_INTO: DOCUMENT + 'SAVE_INTO',
  SAVE_INTO_SUCCESS: DOCUMENT + 'SAVE_INTO_SUCCESS',
  SAVE_INTO_ERROR: DOCUMENT + 'SAVE_INTO_ERROR',
  TOGGLE_HANDLE_MODAL: DOCUMENT + 'TOGGLE_HANDLE_MODAL',
  PUSHMESSAGE: DOCUMENT + 'PUSH_MESSAGE',
  // save and add
  SAVE_ADD: DOCUMENT + 'SAVE_ADD',

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

  saveInto: (data, actionName = 'insert') => ({
    type: actions.SAVE_INTO,
    payload: { data, actionName },
  }),

  saveIntoSuccess: error => ({
    type: actions.SAVE_INTO_SUCCESS,
    payload: { error },
  }),
  // save and add
  updateStatusSaveAdd: (data) => ({
    type: actions.SAVE_ADD,
    payload: data
  })
}

export default actions;