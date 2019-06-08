import React, { Component } from "react";
import "../../scss/form.scss";

const Form = props => (
  <form className="email-form">
    <h1 className="email-form__title">Send E-mail</h1>
    <fieldset className="email-form__fieldset">
      <input placeholder="To" type="email" className="email-form__field" />
      <input placeholder="CC" type="email" className="email-form__field" />
      <input placeholder="BCC" type="email" className="email-form__field" />
      <input placeholder="Subject" type="text" className="email-form__field" />
      <textarea
        placeholder="Message"
        rows="10"
        className="email-form__field email-form__field--textarea"
      />
      <input type="file" multiple className="email-form__file-upload" />
      <button type="submit" className="email-form__button">
        Send
      </button>
    </fieldset>
  </form>
);

export default Form;
