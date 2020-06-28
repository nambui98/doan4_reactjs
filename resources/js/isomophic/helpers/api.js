import { urlConfig } from '../settings';
import axios from 'axios';
export function* callAPI(urlAPI, method, object = null) {
	// debugGing
	try {
		let result = {};

		if (object !== null && object !== '') {
			// object.created_by = localStorage.getItem('user_id');
			// object.updated_by = localStorage.getItem('user_id');
			// vbody = JSON.stringify(object);
			console.log(method, object);
			let response = yield axios({
				method: method,
				url: urlConfig.baseUrl + urlAPI,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('id_token')
				},
				data: object
			});
			let responseOK = response && (response.status === 200 || response.status === 201);
			if (responseOK) {
				result = yield response.data;
			}
		} else {
			let url = urlConfig.baseUrl + urlAPI;
			let response = yield axios({
				method: method,
				url: url,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					Authorization: 'Bearer ' + localStorage.getItem('id_token')
				}
			});
			let responseOK = response && response.status === 200 && response.statusText === 'OK';
			if (responseOK) {
				result = yield response.data;
			}
		}
		return result;
	} catch (error) {
		yield localStorage.clear();
		window.location.reload();
		return null;
	}
}
