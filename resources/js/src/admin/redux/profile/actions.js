const actions = {
    CHANGE_PASSWORD:'CHANGE_PASSWORD',
    CHANGE_SUCCESS: 'CHANGE_SUCCESS',
    CHANGE_ERROR:'CHANGE_ERROR',
    GET_USER:'GET_USER',
    GET_USER_SUCCESS:'GET_USER_SUCCESS',
    GET_USER_ERROR:'GET_USER_ERROR',
    EDIT_PROFILE_VIEW:'EDIT_PROFILE_VIEW',
    SUBMIT_EDIT_PROFILE:'SUBMIT_EDIT_PROFILE',
    UPDATE_PROFILE_ERROR:'UPDATE_PROFILE_ERROR',
    CANCEL_EDIT_PROFILE:'CANCEL_EDIT_PROFILE',
    changePassword: (profile) => ({
        type: actions.CHANGE_PASSWORD,
        profile: profile
    }),
    getUser:(userId, token)=>({
        type:actions.GET_USER,
        userId: userId,
        token:token
    }),
    viewProfileChange: view => ({
        type: actions.EDIT_PROFILE_VIEW,
        view
    }),
    cancelEditProfile:(userId, token)=>({
        type:actions.CANCEL_EDIT_PROFILE,
        userId: userId,
        token:token
    }),
    submitEditProfile:(profile, userId, token) => ({
        type: actions.SUBMIT_EDIT_PROFILE,
        profile:profile,
        userId:userId,
        token:token
    })
};
export default actions