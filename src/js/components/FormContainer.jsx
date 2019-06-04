import React, { Component } from "react";
import ReactDOM from "react-dom";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    return (
      <form id="article-form">
        <input
          text="SEO"
          label="seo_title"
          type="text"
        />
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;