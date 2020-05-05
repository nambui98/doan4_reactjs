import React from 'react';

Loading.propTypes = {};

function Loading(props) {
	return (
		<div id="loading">
			<div className="loader">
				<div className="dot" />
				<div className="dot" />
				<div className="dot" />
				<div className="dot" />
				<div className="dot" />
			</div>
		</div>
	);
}

export default Loading;
