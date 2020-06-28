import actions from './actions';

const initState = {
    isShow: false,
    errorChangePass: null,
    editViewProfile: false,
    profile: {
        footer1: "",
        footer2: "",
        footer3: "",
        enable_popup: true,
        image_popup: ""
    },
    currentUser: {}
};
export default function reducer(state = initState, action) {
    switch (action.type) {

        case actions.GET_INFO_SUCCESS:
            return {
                ...state,
                info: action.payload
            };

        default:
            return state;
    }
};