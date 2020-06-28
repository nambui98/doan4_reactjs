import React, { Component } from "react";
import {Input} from "antd";
import Checkbox from "../../../components/uielements/checkbox";
import Button from "../../../components/uielements/button";
import {Form} from 'antd';

const FormItem = Form.Item;

class FormSingIn extends Component{
    render(){
        const { handleChange, changed, handleLogin, errorLogin } = this.props;
        const { getFieldDecorator } = this.props.form;
        const handleChangeField = () => {
            handleChange();
        }
        const loginButtonClick = (e)=>{
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) =>{
                if(!err){
                    var obj = {
                        ...values
                    }
                    this.props.form.resetFields();
                    handleLogin(obj);
                }
            });
        }
        const formItemLayout = {
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },
            },
        };

        return(
            <Form>
                <FormItem {...formItemLayout} hasFeedback>
                    {getFieldDecorator('username', {
                        rules:[
                            {
                                required: true,
                                message: 'Username is required',
                            }
                        ]
                    })(<Input 
                        type = "text" 
                        size="large" 
                        placeholder="Username" 
                        onChange = {handleChangeField}
                        />)}
                </FormItem>
                <FormItem {...formItemLayout} hasFeedback>
                    {getFieldDecorator('password', {
                        rules:[
                            {
                                required: true,
                                message: 'Password is required',
                            }
                        ]
                    })(
                        <Input 
                        size="large" 
                        type = "password"
                        placeholder="Password"
                        onChange = {handleChangeField}
                        />
                  )}
                </FormItem>
                <FormItem>
                    <div className="isoInputWrapper isoLeftRightComponent">
                      <Checkbox>
                        <span>Remember</span>
                      </Checkbox>
                      <Button 
                      disabled = {!changed}
                      className = "loginButton"
                      onClick = {loginButtonClick}
                      >
                        <span>Login</span>
                      </Button>
                    </div>
                </FormItem>
            </Form>
        );
    }
  };
  const WrappedFormSingIn = Form.create()(FormSingIn);
  export default WrappedFormSingIn