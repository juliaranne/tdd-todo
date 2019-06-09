import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import "../../scss/form_container.scss";
import EmailSuccess from "./EmailSuccess";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      emailFields: {
        to: {
          valid: true,
          value: []
        },
        cc: {
          valid: true,
          value: []
        },
        bcc: {
          valid: true,
          value: []
        }
      },
      textFields: {
        subject: {
          valid: false,
          value: ""
        },
        message: {
          valid: false,
          value: ""
        }
      },
      imgPreviews: [],
      valid: false,
      submitted: false
    };

    this.handleUpload = this.handleUpload.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
    this.validateTextFields = this.validateTextFields.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.clearEmailValidation = this.clearEmailValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpload(event) {
    if (event.target.files) {
      for (let i = 0; i < event.target.files.length; i += 1) {
        let imgName = event.target.files[i].name;
        let reader = new FileReader();
        reader.onload = function(ev) {
          this.setState({
            imgPreviews: [
              ...this.state.imgPreviews,
              { src: ev.target.result, name: imgName }
            ]
          });
        }.bind(this);
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  deleteImage(event) {
    const parentElement = document.querySelector(".email-form__attachments");
    const index =
      [...parentElement.children].indexOf(event.target.parentElement) - 1;
    let imgPreviews = this.state.imgPreviews;
    imgPreviews.splice(index, 1);
    this.setState({
      imgPreviews
    });
  }

  validateTextFields(event) {
    const name = event.target.name;
    const isValid = event.target.value.length > 0 ? true : false;
    this.setState(
      {
        textFields: {
          ...this.state.textFields,
          [name]: {
            valid: isValid,
            value: event.target.value
          }
        }
      },
      () => this.updateSubmit()
    );
  }

  validateEmail(event) {
    let emails = event.target.value;
    const name = event.target.name;
    let validEmails = [];
    const regex = /^([\w+-.%]+@[\w.-]+\.[A-Za-z]{2,4})(,[\w+-.%]+@[\w.-]+\.[A-Za-z]{2,4})*$/;

    if (emails === "") {
      return this.clearEmailValidation(name);
    } else {
      emails = emails.split(" ");
      for (let i = 0; i < emails.length; i += 1) {
        if (regex.test(emails[i])) {
          validEmails.push(emails[i]);
        }
      }
      const valid = emails.length === validEmails.length ? true : false;
      this.updateEmails(name, validEmails, valid);
    }
  }

  clearEmailValidation(name) {
    this.setState({
      emailFields: {
        ...this.state.emailFields,
        [name]: {
          valid: true,
          value: []
        }
      }
    });
  }

  updateEmails(name, emails, valid) {
    this.setState(
      {
        emailFields: {
          ...this.state.emailFields,
          [name]: {
            valid,
            value: emails
          }
        }
      },
      () => this.updateSubmit()
    );
  }

  updateSubmit() {
    const textValues = Object.values(this.state.textFields).every(
      item => item.valid === true
    );
    const emailValues = !Object.values(this.state.emailFields).some(
      item => item.valid === false
    );
    const submitState = textValues && emailValues ? true : false;
    this.setState({
      valid: submitState
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }

  render() {
    return (
      <div className="email-form-wrapper">
        {!this.state.submitted ? (
          <Form
            valid={this.state.valid}
            upload={this.handleUpload}
            imgPreviews={this.state.imgPreviews}
            deleteImg={this.deleteImage}
            validateTextFields={this.validateTextFields}
            validateEmail={this.validateEmail}
            formSubmit={this.handleSubmit}
            toError={this.state.emailFields.to.valid}
            ccError={this.state.emailFields.cc.valid}
            bccError={this.state.emailFields.bcc.valid}
          />
        ) : (
          <EmailSuccess
            title={this.state.textFields.subject.value}
            message={this.state.textFields.message.value}
            imgPreviews={this.state.imgPreviews}
            emailTo={this.state.emailFields.to.value}
            emailCc={this.state.emailFields.cc.value}
            emailBcc={this.state.emailFields.bcc.value}
          />
        )}
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
