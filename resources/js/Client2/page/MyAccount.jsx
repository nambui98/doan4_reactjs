import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd-v4';
import Breadcrumb from '../conponents/Breadcrumb';
import ModalUpdate from '../conponents/ModalUpdate';
import ChangePass from '../conponents/ChangePass';

MyAccount.propTypes = {};

function MyAccount(props) {
	let user = JSON.parse(sessionStorage.getItem('account'));

	const [ account, setAccount ] = useState(user);
	const [ isShow, setShow ] = useState(false);
	const [ isShowChangePass, setShowChangePass ] = useState(false);
	const handleUpdate = () => setShow(!isShow);
	const handleChangePass = () => setShowChangePass(!isShowChangePass);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const chageAcc = (user) => {
		setAccount(user);
	};
	return [
		<Breadcrumb nameLocation="Tài khoản của tôi" />,
		<section className="checkout-wrap sec-space" style={{ paddingTop: 50, paddingBottom: 50 }}>
			<div className="container">
				<div id="collapseOne" className="panel-collapse collapse in">
					<div className="chk-body pt-15 block-inline">
						<PageHeader
							className="site-page-header"
							title={<h2>Tài khoản</h2>}
							extra={[
								<Button key="3" type="danger" size="large" onClick={handleChangePass}>
									Thay đổi mật khẩu
								</Button>,
								<Button key="2" type="primary" size="large" onClick={handleUpdate}>
									Sửa thông tin
								</Button>
							]}
						>
							<Descriptions size="large" column={1}>
								<Descriptions.Item label="Tên Đăng Nhập">{account.name}</Descriptions.Item>
								<Descriptions.Item label="Email">
									<a>{account.email}</a>
								</Descriptions.Item>
								<Descriptions.Item label="Số Điện Thoại">{account.phone}</Descriptions.Item>
								<Descriptions.Item label="Địa Chỉ">{account.address}</Descriptions.Item>
								<Descriptions.Item label="Hình Đại Diện">
									<img src={'img/avatar/' + account.avatar} style={{ width: 80 }} alt="" />
								</Descriptions.Item>
							</Descriptions>
						</PageHeader>
					</div>
				</div>
			</div>
		</section>,
		<ModalUpdate isShow={isShow} user={account} chageAcc={chageAcc} handleRegister={handleUpdate} />,
		<ChangePass isShow={isShowChangePass} user={account} chageAcc={chageAcc} handleRegister={handleChangePass} />
	];
}

export default MyAccount;
