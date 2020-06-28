const live = false;
const country = 'vn';
const urlConfig = {
	baseUrl:
		country === 'vn'
			? live ? 'http://172.104.59.140:3015/' : 'http://172.105.120.33:3015/'
			: live ? 'http://172.104.59.140:3015/' : 'http://172.105.120.33:3015/',
	imageUrl: live ? 'http://172.104.59.140:3015/' : 'http://172.105.120.33:3015/',
	socketUrl: 'http://172.104.59.140:5001',
	pageLimit: 10
};

const siteConfig = {
	siteName: 'Fors',
	siteIcon: 'ion-flash',
	footerText: '2020 @ Copyright Fors Co,. Ltd',
	Version: '1.0'
};

const themeConfig = {
	topbar: 'themedefault',
	sidebar: 'themedefault',
	layout: 'themedefault',
	theme: 'themedefault'
};
const language = 'english';
const token = localStorage.getItem('id_token');
const dataConfig = {
	pageLimit: 10
};
export { token, dataConfig, urlConfig, siteConfig, themeConfig, language };
