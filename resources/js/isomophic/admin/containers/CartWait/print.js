import React from 'react';
import logoLeft from '../../../public/images/logo.png';
import logoRight from '../../../public/images/imagePrint.jpg';
import { urlConfig } from '../../../settings/index';
import helperFunc from '../../../helpers/helperFunc';

import { Icon, Typography, Descriptions } from 'antd';
const { Text } = Typography;
const { Title } = Typography;
const { convertNumber } = helperFunc;

class ComponentToPrint extends React.Component {
	render() {
		const { row } = this.props;
		console.log(row);

		return (
			<div className="clearfix" style={{ margin: '20px 30px 20px 30px' }}>
				<div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
					<image src={logoLeft} style={{ height: '50px' }} />
					<div>
						<Title level={3} style={{ marginTop: 50, marginBottom: 10 }}>
							NATURIX FARMFOOD
						</Title>
						<hr />
						<Icon style={{ fontSize: 20, marginRight: 6 }} type="facebook" />
						<Text style={{ fontSize: 20 }}>Nam Bùi</Text>
						<br />
						<Icon type="phone" style={{ fontSize: 20, marginRight: 6 }} />
						<Text style={{ fontSize: 20 }}>035.581.7589</Text>
					</div>
				</div>
				<hr />
				<Descriptions column={1}>
					<Descriptions.Item style={{ fontSize: 20 }} label="Người nhận">
						{row ? row.name : ''}
					</Descriptions.Item>
					<Descriptions.Item style={{ fontSize: 20 }} label="Số điện thoại">
						{row ? row.phone : ''}
					</Descriptions.Item>
					<Descriptions.Item style={{ fontSize: 20 }} label="Địa chỉ">
						{row ? row.address : ''}
					</Descriptions.Item>
				</Descriptions>
				<hr />
				<Descriptions column={2}>
					<Descriptions.Item style={{ fontSize: 20 }} label="Tiền ship">
						{row ? row.payTypeOfType === 2 ? '15,000 ₫' : '35,000 ₫' : ''}
					</Descriptions.Item>
					<Descriptions.Item
						style={{ fontSize: 20 }}
						label={<Text style={{ fontSize: 20, fontWeight: 700 }}>TỔNG TIỀN</Text>}
					>
						<Text style={{ fontSize: 20, fontWeight: 700 }}>
							{row ? convertNumber(row.totalmoney) + ' ₫' : ''}
						</Text>
					</Descriptions.Item>
					<Descriptions.Item style={{ fontSize: 20 }} label="Tiền hàng">
						{row ? row.payTypeOfType === 2 ? (
							convertNumber(row.totalmoney - 15000) + ' ₫'
						) : (
							convertNumber(row.totalmoney - 35000) + ' ₫'
						) : (
							''
						)}
					</Descriptions.Item>
				</Descriptions>
				<Text style={{ fontSize: 25, fontWeight: 700, fontStyle: 'italic' }}>
					Naturix farmfood xin chân thành cảm ơn
				</Text>
				{/* <Descriptions column={1} style={{ float: 'right' }}>
					<Descriptions.Item style={{ fontSize: 20 }} label="TỔNG TIỀN">
						{row ? convertNumber(row.totalmoney) + ' ₫' : ''}
					</Descriptions.Item>
				</Descriptions> */}
			</div>
		);
	}
}

export default ComponentToPrint;
