import React from "react";
import "../../scss/email_success.scss";
import ImagePreviews from "./ImagePreviews";

const EmailSuccess = props => (
  <div className="email">
    <h3 className="email__header">Your email has been sent</h3>
    <h3 className="email__title">{props.title}</h3>
    {props.emailTo.length ? (
      <ul className="email__list">
        <span>to</span>
        {props.emailTo.map((address, index) => (
          <li key={index} className="email__address">
            {address}
          </li>
        ))}
      </ul>
    ) : null}
    {props.emailCc.length ? (
      <ul className="email__list">
        <span>cc</span>
        {props.emailCc.map((address, index) => (
          <li key={index} className="email__address">
            {address}
          </li>
        ))}
      </ul>
    ) : null}
    {props.emailBcc.length ? (
      <ul className="email__list">
        <span>bcc</span>
        {props.emailBcc.map((address, index) => (
          <li key={index} className="email__address">
            {address}
          </li>
        ))}
      </ul>
    ) : null}
    <div className="email__content">{props.message}</div>
    {props.imgPreviews.length ? (
      <ImagePreviews images={props.imgPreviews} deleteImg={false} />
    ) : null}
  </div>
);

export default EmailSuccess;
