import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import DashApp from './dashApp';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(<DashApp />, document.getElementById('rootAdmin'));

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./dashApp.js', () => {
		const NextApp = require('./dashApp').default;
		ReactDOM.render(<NextApp />, document.getElementById('rootAdmin'));
	});
}
registerServiceWorker();
