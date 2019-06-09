import React from "react";
import "../../scss/image_previews.scss";

const ImagePreviews = props => (
  <ul className="email-form__attachments">
    {props.showTitle ? (
      <h4 className="email-form__heading">Attached files</h4>
    ) : null}
    {props.images.map((image, index) => (
      <li
        key={index}
        className="email-form__attachment"
        onClick={props.deleteImg}
      >
        <span className="email-form__image-delete" />
        <img src={image.src} alt={image.name} className="email-form__image" />
      </li>
    ))}
  </ul>
);
export default ImagePreviews;
