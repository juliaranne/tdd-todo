import React from "react";
import "../../scss/form.scss";
import ImagePreviews from "./ImagePreviews";

const Form = props => (
  <form className="email-form" onSubmit={props.formSubmit}>
    <h1 className="email-form__title">Send E-mail</h1>
    <fieldset className="email-form__fieldset">
      <input
        placeholder="To"
        type="email"
        className={
          !props.toError ? "email-form__field error" : "email-form__field"
        }
        onBlur={props.validateEmail}
        multiple
        name="to"
      />
      <input
        placeholder="CC"
        type="email"
        className={
          !props.ccError ? "email-form__field error" : "email-form__field"
        }
        onBlur={props.validateEmail}
        multiple
        name="cc"
      />
      <input
        placeholder="BCC"
        type="email"
        className={
          !props.bccError ? "email-form__field error" : "email-form__field"
        }
        onBlur={props.validateEmail}
        multiple
        name="bcc"
      />
      <input
        placeholder="Subject"
        maxLength="100"
        type="text"
        className="email-form__field"
        name="subject"
        onChange={props.validateTextFields}
      />
      <textarea
        placeholder="Message"
        rows="10"
        className="email-form__field email-form__field--textarea"
        name="message"
        onChange={props.validateTextFields}
        // onBlur={props.updateMessage}
      />
      {props.imgPreviews.length ? (
        <ImagePreviews
          images={props.imgPreviews}
          deleteImg={props.deleteImg}
          showTitle={true}
        />
      ) : null}
      <div className="email-form__buttons">
        <label className="email-form__upload-label" htmlFor="fileinput" />
        <input
          type="file"
          multiple
          className="email-form__file-upload"
          onChange={props.upload}
          id="fileinput"
        />
        <button
          type="submit"
          className="email-form__button"
          disabled={!props.valid}
        >
          Send
        </button>
      </div>
    </fieldset>
  </form>
);

export default Form;
