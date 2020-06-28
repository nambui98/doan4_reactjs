const DOCUMENT = 'CONFIG_';
const actions = {
    UPDATE: DOCUMENT + 'UPDATE',
    UPDATE_SUCCESS: DOCUMENT + 'UPDATE_SUCCESS',
    UPDATE_ERROR: DOCUMENT + 'UPDATE_ERROR',
    GET_INFO: 'GET_INFO',
    GET_INFO_SUCCESS: 'GET_INFO_SUCCESS',
    GET_INFO_ERROR: 'GET_INFO_ERROR',
    getInfo: () => ({
        type: actions.GET_INFO,
    }),
    update: data => ({
        type: actions.UPDATE,
        payload: { data },
    })
};
export default actions