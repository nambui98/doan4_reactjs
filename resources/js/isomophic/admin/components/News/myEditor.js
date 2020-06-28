import React, { Component } from "react";
import Modals from "../../../common/modal.style";
import BaseModal from "../../../components/base";
import WithDirection from "../../../../src/settings/withDirection";
import isoModal from "../../../components/feedback/modal";
import notification from "../../../components/notification";
import { urlConfig } from "../../../settings";
import DataWrapper from "../../../common/data.style";
import helperFunc from "../../../helpers/helperFunc";
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  ContentState
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
//import CKEditor from "react-ckeditor-component";
//import Editor from "nib-core";
import moment from "moment";
import { Editor } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// save and add
import { Form, Input, Select } from "antd";

const WDModal = Modals(isoModal);

const html = "<div><p></p></div>";
const blocksFromHTML1 = htmlToDraft(html);
const content = ContentState.createFromBlockArray(blocksFromHTML1);

class MyEditor extends Component {
  constructor(props) {
    super(props);

    let editorState = EditorState.createWithContent(content);
    if (
      props.content != null &&
      typeof props.content !== "undefined" &&
      props.content !== ""
    ) {
      const blocksFromHtml = htmlToDraft(props.content);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      editorState = EditorState.createWithContent(contentState);
    }
    this.state = {
      ...props,
      editorState: editorState
    };
  }
  componentWillReceiveProps(nextProps) {
    let editorState = EditorState.createWithContent(content);
    if (
      nextProps.content != null &&
      nextProps.content !== "undefined" &&
      this.content !== ""
    ) {
      const blocksFromHtml = htmlToDraft(nextProps.content);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      editorState = EditorState.createWithContent(contentState);
    }
    this.setState({
      editorState: editorState
    });
    
  }
  componentWillUnmount() {
  }

  //Bật tắt nút Save
  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          initialEditorState={editorState}
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </div>
    );
  }
}
const WrappedMyEditor = Form.create()(MyEditor);
export default WrappedMyEditor;
