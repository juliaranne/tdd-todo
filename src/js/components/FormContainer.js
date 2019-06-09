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
      imgPreviews: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
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

  render() {
    return (
      <div className="email-form-wrapper">
        <Form
          valid={this.state.valid}
          upload={this.handleUpload}
          imgPreviews={this.state.imgPreviews}
          deleteImg={this.deleteImage}
        />
      </div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
