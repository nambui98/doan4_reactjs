import React from 'react';
import logoLeft from '../../../public/images/logo.png';
import logoRight from '../../../public/images/imagePrint.jpg';
import { urlConfig } from '../../../settings/index';

class ComponentToPrint extends React.Component {
	render() {
		const { rows } = this.props;
		console.log(rows);
		const container =
			rows && rows.length > 0
				? rows.map((row, index) => {
						return (
							<div className="clearfix" key={index} style={{ margin: '20px 0 40px 0' }}>
								<div>
									<h4>
										{index + 1}. {row.title}
									</h4>
									<div
										style={{
											fontSize: 12
										}}
									>
										<span style={{ fontWeight: 700 }}>{row.admin.full_name} </span>
										({row.announcement_date})
									</div>
									<div style={{ marginTop: '10px', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
										{row.description}
									</div>
									<div>
										{row && row.images && row.images.length > 0 ? (
											row.images
												.split('##########')
												.slice(0, row.images.split('##########').length - 1)
												.map((image, index) => (
													<img
														key={index}
														style={{
															width: '300px',
															display: 'block',
															marginTop: '5px',
															marginLeft: 'auto',
															marginRight: 'auto'
														}}
														alt={row.name}
														src={urlConfig.imageUrl + image}
													/>
												))
										) : (
											''
										)}
									</div>
								</div>
							</div>
						);
					})
				: '';
		return (
			<div className="clearfix" style={{ margin: '20px 30px 20px 30px' }}>
				<div style={{ height: '50px' }}>
					<image src={logoLeft} style={{ height: '50px', float: 'left' }} />
					<image src={logoRight} style={{ height: '50px', float: 'right' }} />
				</div>

				{container}
			</div>
		);
	}
}

export default ComponentToPrint;
