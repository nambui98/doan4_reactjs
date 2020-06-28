import React from 'react';
import logoLeft from '../../../public/images/logo.png';
import logoRight from '../../../public/images/imagePrint.jpg';
import { urlConfig } from '../../../settings/index';
import helperFunc from '../../../helpers/helperFunc';

import {
	ActionWrapper,
	TableWrapper,
	ButtonHolders,
	TitleWrapper,
	ComponentTitle
} from '../../../common/control.style';
import IntlMessages from '../../../components/utility/intlMessages';
const { convertNumber } = helperFunc;

class ComponentToPrint extends React.Component {
	render() {
		const { rows } = this.props;
		const dataSource = [];
		if (typeof rows !== 'undefined' && rows !== null) {
			Object.keys(rows).map((row, index) => {
				return dataSource.push({
					...rows[row],
					key: row
				});
			});
		}
		let columns = [];
		columns = [
			{
				title: 'Id',
				dataIndex: 'id',
				key: 'id',

				render: (text, row) => {
					return <div>{row.id}</div>;
				}
			},
			{
				title: 'Tên sản phẩm',
				dataIndex: 'name',
				key: 'name',
				className: 'noWrapCell',

				render: (text, row) => {
					return <span>{row.name}</span>;
				}
			},
			{
				title: 'Hạn sử dụng',
				dataIndex: 'dateUse',
				key: 'dateUse',
				className: 'noWrapCell',

				render: (text, row) => {
					return <span>{row.dateUse}</span>;
				}
			},
			{
				title: 'Số lượng tồn',
				dataIndex: 'massRest',
				className: 'noWrapCell',
				key: 'massRest',

				render: (text, row) => {
					return <span>{row.massRest}</span>;
				}
			},
			{
				title: 'Giá nhập',
				dataIndex: 'inputprice',
				className: 'noWrapCell',
				key: 'inputprice',

				render: (text, row) => {
					return <span>{convertNumber(row.inputprice)} ₫</span>;
				}
			},
			{
				title: 'Ngày nhập',
				dataIndex: 'Description',
				key: 'Description',

				render: (text, row) => {
					return <span>{row.created_at}</span>;
				}
			}
		];
		return (
			<div className="clearfix" style={{ margin: '20px 30px 20px 30px' }}>
				<h2>Thống kê sản phẩm hết hạn</h2>
				<TableWrapper
					rowKey="key"
					columns={columns}
					dataSource={dataSource}
					locale={{
						emptyText: (
							<span>
								<IntlMessages id="button.empty" />
							</span>
						)
					}}
					className="isoSimpleTable"
					bordered={true}
					pagination={false}
				/>
			</div>
		);
	}
}

export default ComponentToPrint;
