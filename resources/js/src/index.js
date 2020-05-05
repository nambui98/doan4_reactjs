import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import '../css/index.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
if (document.getElementById('root')) {
	ReactDOM.render(
		// <React.StrictMode>
		<Router>
			<App />
		</Router>,
		// </React.StrictMode>,
		document.getElementById('root')
	);
}
