import React from "react";
import "../../scss/form.scss";
import ImagePreviews from "./ImagePreviews";

const Form = props => (
  <form className="email-form">
    <h1 className="email-form__title">Send E-mail</h1>
    <fieldset className="email-form__fieldset">
      <input placeholder="To" type="email" className="email-form__field" />
      <input placeholder="CC" type="email" className="email-form__field" />
      <input placeholder="BCC" type="email" className="email-form__field" />
      <input
        placeholder="Subject"
        maxLength="100"
        type="text"
        className="email-form__field"
      />
      <textarea
        placeholder="Message"
        rows="10"
        className="email-form__field email-form__field--textarea"
      />
      {props.imgPreviews.length ? (
        <ImagePreviews images={props.imgPreviews} deleteImg={props.deleteImg} />
      ) : null}
      <div className="email-form__buttons">
        <input
          type="file"
          multiple
          className="email-form__file-upload"
          onChange={props.upload}
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
