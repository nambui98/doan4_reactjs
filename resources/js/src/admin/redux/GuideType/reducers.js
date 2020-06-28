import actions from "./actions";

const initState = {
  isLoading: false,
  isSuccess: false,
  errorMessage: false,
  rows: [],
  modalActive: false,
  modalType: "view",
  row: {
    id: 0,
    name: "",
    createdBy: localStorage.getItem("user_id"),
    editedBy: localStorage.getItem("user_id")
  },
  saveAdd: false
};

export default function NewsTypeReducer(
  state = initState,
  { type, payload }
) {
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
        rows: payload.data.rows,
        count: payload.data.count,
        errorMessage: false
      };
    case actions.LOAD_FORM_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: "There is a loading problem"
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
        isSuccess:true
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
