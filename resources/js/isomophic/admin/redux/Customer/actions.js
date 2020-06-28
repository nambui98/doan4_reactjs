const DOCUMENT = 'CUSTOMER_';
const actions = {
	LOAD_FORM: DOCUMENT + 'LOAD_FORM',
	LOAD_FORM_SUCCESS: DOCUMENT + 'LOAD_FORM_SUCCESS',
	LOAD_FORM_ERROR: DOCUMENT + 'LOAD_FORM_ERROR',

	SAVE_INTO: DOCUMENT + 'SAVE_INTO',
	SAVE_INTO_SUCCESS: DOCUMENT + 'SAVE_INTO_SUCCESS',
	SAVE_INTO_ERROR: DOCUMENT + 'SAVE_INTO_ERROR',

	TOGGLE_HANDLE_MODAL: DOCUMENT + 'TOGGLE_HANDLE_MODAL',
	PUSHMESSAGE: DOCUMENT + 'PUSH_MESSAGE',

	UPDATE_ROLE: DOCUMENT + 'UPDATE_ROLE',
	// save and add
	SAVE_ADD: DOCUMENT + 'SAVE_ADD',
	TOGGLE_HANDLE_MODAL_SUCCESS: DOCUMENT + 'TOGGLE_HANDLE_MODAL_SUCCESS',
	UPDATE_ID_ARR: DOCUMENT + 'UPDATE_ID_ARR',
	UPDATE_CHECK: DOCUMENT + 'UPDATE_CHECK',
	UPDATE_CHECK_ALL: DOCUMENT + 'UPDATE_CHECK_ALL',
	CHECK_ROLE_DETAIL: DOCUMENT + 'CHECK_ROLE_DETAIL',

	updateCheckRole: (obj) => {
		return {
			type: actions.CHECK_ROLE_DETAIL,
			obj: obj
		};
	},

	loadData: (data) => {
		return { type: actions.LOAD_FORM, payload: { data } };
	},

	loadDataSuccess: (data) => ({
		type: actions.LOAD_FORM_SUCCESS,
		payload: { data }
	}),

	loadDataError: (error) => ({
		type: actions.LOAD_FORM_ERROR,
		payload: { error }
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
		payload: { data, actionName }
	}),

	saveIntoSuccess: (error) => ({
		type: actions.SAVE_INTO_SUCCESS,
		payload: { error }
	}),

	updateRole: (data) => ({
		type: actions.UPDATE_ROLE,
		payload: data
	}),
	// save and add
	updateStatusSaveAdd: (data) => ({
		type: actions.SAVE_ADD,
		payload: data
	}),
	updateIdArr: (data) => ({
		type: actions.UPDATE_ID_ARR,
		payload: data
	}),

	updateCheck: (arr, dataCheck, arrCheckedList) => ({
		type: actions.UPDATE_CHECK,
		payload: { arr, dataCheck, arrCheckedList }
	}),

	updateCheckAll: (arr, dataCheck, arrCheckedList) => ({
		type: actions.UPDATE_CHECK_ALL,
		payload: { arr, dataCheck, arrCheckedList }
	})
};

export default actions;
