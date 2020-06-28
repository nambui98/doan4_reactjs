import React, {Component} from 'react';
import Modals from '../../../common/modal.style';
import WithDirection from '../../../../src/settings/withDirection';
import isoModal from '../../../components/feedback/modal';
import { Input, Button } from 'antd';
import Form from '../../../components/uielements/form';
import DataWrapper from '../../../common/data.style';
import styleControl from "../../../common/styleControl";
import helperFunc from "../../../helpers/helperFunc";
import formItemLayout from "../../../helpers/formItem";
import IntlMessages from '../../../components/utility/intlMessages';

const WDModal = Modals(isoModal);
const Modal = WithDirection(WDModal);
const FormItem = Form.Item;

class ModalForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            changed: false
        }
    }
    handleChange = () => {
        this.setState({
            changed: true
        })
    }
    render(){
        const {
            modalActive,
            modalType,
            row,
            handleCancel,
            handleSubmit,
            // save and add
            updateStatusAdd
        } = this.props;
        const { getFieldDecorator } = this.props.form;
        
        const saveButton = (e) => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
                if (!err) {
                    row.name = values.name;
                    handleSubmit(modalType,row);
                }
            });
        }
        const saveAdd = (e) => {
            e.preventDefault();
            if(modalType === helperFunc.modeType.Insert){
                updateStatusAdd(true);
                this.saveButton(e);
            }
        }

        return(
            <Modal
                title={modalType ===  helperFunc.modeType.Update ?  <IntlMessages id="form.titleUpdate" />  : <IntlMessages id="form.titleInsert" /> }
                className = "FormModal"
                visible={modalActive}
                onCancel={handleCancel}
                cancelText="Cancel"
                onOk={saveButton}
                okText="Save"
                footer={
                    modalType === helperFunc.modeType.Insert ?
                    [
                        <Button key="cancel" className="cancelType"
                            onClick={handleCancel}
                            style={styleControl(3, modalType)}
                        ><IntlMessages id="button.close" /></Button>,
                        <Button key="ok" className="okType"
                            onClick={saveButton}
                            style={styleControl(1, modalType)}
                            disabled={!this.state.changed}
                        ><IntlMessages id="button.save" /></Button>,
                        <Button key="oknew" className="okNewType"
                            onClick={saveAdd}
                            style={styleControl(2, modalType)}
                            disabled={!this.state.changed}
                        ><IntlMessages id="button.save&AddNew" /></Button>
                    ] : 
                    [
                        <Button key="cancel" className="cancelType"
                            onClick={handleCancel}
                            style={styleControl(3, modalType)}
                        ><IntlMessages id="button.close" /></Button>,
                        <Button key="ok" className="okType"
                            onClick={saveButton}
                            style={styleControl(1, modalType)}
                            disabled={!this.state.changed}
                        ><IntlMessages id="button.save" /></Button>
                    ]}
            >
                <DataWrapper>
                        {
                            modalType === helperFunc.modeType.Insert ? 
                            (
                                <Form className="isoCardInfoForm FormData">
                                    <div style={{width: "100%"}}>
                                        <FormItem {...formItemLayout}
                                            label={(
                                                <span>
                                                    <IntlMessages id="form.name" />
                                                </span>
                                            )}
                                            hasFeedback
                                        >
                                            {getFieldDecorator('name', {
                                                rules: 
                                                [{ 
                                                    required: true, 
                                                    message:  <IntlMessages id="form.validate.name" />
                                                }] })(<Input onChange = {this.handleChange} />)}
                                        </FormItem>
                                    </div>
                                </Form>
                            ) : modalType === helperFunc.modeType.Update ?
                            (
                                <Form className="isoCardInfoForm FormData">
                                    <div style={{width: "100%"}}>
                                        <FormItem {...formItemLayout}
                                            label={(
                                                <span>
                                                    <IntlMessages id="form.name" />
                                                </span>
                                            )}
                                            hasFeedback
                                        >
                                            {getFieldDecorator('name', { 
                                                initialValue: (row.name), 
                                                rules: 
                                                [{ 
                                                    required: true, 
                                                    message: <IntlMessages id="form.validate.name" />
                                                }] })(<Input onChange = {this.handleChange} />)}
                                        </FormItem>
                                    </div>
                                </Form>
                            )
                            :""
                        }
                </DataWrapper>
            </Modal>
        )
    }
}

const WrappedModalForm = Form.create()(ModalForm);
export default WrappedModalForm;