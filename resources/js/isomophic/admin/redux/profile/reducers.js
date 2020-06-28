import actions from './actions'
import { getUserId } from '../../../helpers/utility';

const initState = {
    isShow:false,
    errorChangePass:null,
    editViewProfile:false,
    profile:{
        userId: getUserId().get('userId'),
        oldpass: null,
        newpass: null,
        confirmpass: null
      },
    currentUser:{},
    dataUsers:{}
};
export default function reducer(state = initState, action){
  
    switch(action.type){
        case actions.CHANGE_SUCCESS:
            return {
                ...state,
                errorChangePass: false
            };
        case actions.CHANGE_ERROR:
            return {
                ...state, 
                errorChangePass: true
            };
        case actions.GET_USER_SUCCESS:
            return {
                ...state, 
                errorChangePass: null,
                editViewProfile:false,
                currentUser:action.currentUser,
                dataUsers:action.dataUsers
            };
        case actions.GET_USER_ERROR:
            return initState;
        case actions.EDIT_PROFILE_VIEW:
            return {
                ...state,
                errorChangePass: null,
                editViewProfile: action.view
            }
            case actions.UPDATE_PROFILE_ERROR:
            return {
                ...state,
                errorChangePass: null,
                editViewProfile: action.view
            }
        default:
            return state;
    }
};