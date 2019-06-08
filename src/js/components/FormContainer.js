import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "../../scss/form_container.scss";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      formFields: {
        to: {
          value: "",
          valid: false
        },
        cc: {
          value: "",
          valid: false
        },
        bcc: {
          value: "",
          valid: false
        },
        subject: {
          value: "",
          valid: false
        },
        message: {
          value: "",
          valid: false
        }
      },
      valid: false,
      imgsrc: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleUpload(e) {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files, e.target.files[0]);
      let reader = new FileReader();
      reader.onload = function(ev) {
        this.setState({ imgsrc: ev.target.result });
      }.bind(this);
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  render() {
    return (
      <div className="email-form-wrapper">
        <Form
          valid={this.state.valid}
          upload={this.handleUpload}
          imagesrc={this.state.imgsrc}
        />
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
