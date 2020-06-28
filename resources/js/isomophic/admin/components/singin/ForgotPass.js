/*
    Method Name: forgot password
    Description: send
    Author: Nam Nam
    Last Modified Author: Nam Nam
    Created Date: 20/02/2020
    Modified Date: 2/03/2020
*/
import React, { Component } from 'react';
import { Input } from 'antd';
import isoModal from '../../../components/feedback/modal';
import Modals from '../../../common/modal.style';
import WithDirection from '../../../settings/withDirection';
import { Form } from 'antd';
import IntlMessages from '../../../components/utility/intlMessages';
import formItemLayout from "../../../helpers/formItem";

const FormItem = Form.Item;

const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
class ChangePasswordModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: false,
            confirmDirty: false
        }
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('newpass')) {
            callback("");
        } else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirmpass'], { force: true });
        }
        callback();
    }
    enableSubmitButton = () => {
        this.setState({
            changed: true
        })
    }
    render() {
        const { isShow, handleCancel, userId, submitChange } = this.props;
        const { getFieldDecorator } = this.props.form;

        //handle button save click
        const saveChangePassword = (e) => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    var obj = {
                        ...values,
                        userId: userId
                    };
                    submitChange(obj);
                    this.props.form.resetFields();
                }
            });
        }
        const handleCancelButtonClick = () => {
            this.setState({
                changed: false,
                confirmDirty: false
            }, function () {
                this.props.form.resetFields();
                handleCancel();
            });
        }

        return (
            <Modal
                title={<IntlMessages id="form.forgotPassword" />}
                visible={isShow}
                onCancel={handleCancelButtonClick}
                cancelText={<IntlMessages id="button.cancel" />}
                onOk={saveChangePassword}
                okText={<IntlMessages id="button.save" />}
            >
                <Form>
                    <FormItem {...formItemLayout} label="Email" hasFeedback>
                        {getFieldDecorator('oldpass', {
                            rules: [
                                {
                                    required: true,
                                    message: <IntlMessages id="form.validate.this" />,
                                },
                                {
                                    min: 6,
                                    message: <IntlMessages id="form.validate.Character6_20" />,
                                },
                                {
                                    whitespace: true,
                                    message: <IntlMessages id="form.validate.passwordOrther" />
                                },
                                {
                                    max: 20,
                                    message: <IntlMessages id="form.validate.Character6_20" />,
                                }
                            ]
                        })(<Input onChange={this.enableSubmitButton} type="password" />)}
                    </FormItem>
                  
                </Form>
            </Modal>
        );
    }
};
const WrappedFormChangePassWord = Form.create()(ChangePasswordModal);
export default WrappedFormChangePassWord;