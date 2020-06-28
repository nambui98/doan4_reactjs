import React, { Component } from 'react';
import { ContactCardWrapper } from '../../../components/contacts/contactCard.style';
import moment from 'moment';
import Form from '../../../components/uielements/form';

const FormItem = Form.Item;
const dateFormat = "DD/MM/YYYY";
export default class extends Component {

  render() {
    const { profile, otherAttributes } = this.props;
    const extraInfos = [];
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    otherAttributes.forEach(attribute => {
      const value = profile[attribute.value];
      if (attribute.value !== "image") {
        if (value) {
          switch (attribute.value) {
            case "created_at":
              extraInfos.push(
                <div className="isoContactCardInfos" key={attribute.value}>
                  <p className="isoInfoLabel">{`${attribute.title}`}</p>
                  <p className="isoInfoDetails isoNoteCreatedDate">{moment(value).format(dateFormat)}</p>
                </div>
              );
              break;
            case "updated_at":
              extraInfos.push(
                <div className="isoContactCardInfos" key={attribute.value}>
                  <p className="isoInfoLabel">{`${attribute.title}`}</p>
                  <p className="isoInfoDetails isoNoteCreatedDate">{moment(value).format(dateFormat)}</p>
                </div>
              );
              break;
            default: break;
          }
        }
      }
    });
    return (
      <ContactCardWrapper className="isoContactCard">
        <div className="isoContactInfoWrapper">
          <Form>
            <FormItem {...formItemLayout} label="Full name">
              <label>{profile.full_name}</label>
            </FormItem>
            <FormItem {...formItemLayout} label="Username">
              <label>{profile.username}</label>
            </FormItem>
            <FormItem {...formItemLayout} label="Email">
              <label>{profile.email}</label>
            </FormItem>
            <FormItem {...formItemLayout} label="Created at">
              <label>{
                profile.created_at ? (
                  moment(profile.created_at).format("MM/DD/YYYY")
                ) : ""
              }</label>
            </FormItem>
            <FormItem {...formItemLayout} label="Updated at">
              <label>{
                profile.created_at ? (
                  moment(profile.upload_at).format("MM/DD/YYYY")
                ) : ""
              }</label>
            </FormItem>
          </Form>
        </div>
      </ContactCardWrapper>
    );
  }
}
