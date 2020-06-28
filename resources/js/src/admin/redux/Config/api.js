import axios from 'axios';
import {urlConfig} from '../../../settings';
function ChangePassword(action){
    axios({
        method: 'post',
        url: urlConfig.baseUrl + 'api/user/ChangePassword',
        data: {
          UserId: action.profile.userId,
          OldPassword: action.profile.oldpass,
          NewPassword: action.profile.newpass
        },
        headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json',
             'Authorization': 'Bearer '+ action.id_token
        }
      })
};
export const ProfileApi = {
    ChangePassword
};
