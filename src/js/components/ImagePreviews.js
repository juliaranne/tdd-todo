import React from "react";
import "../../scss/image_previews.scss";

const ImagePreviews = props => (
  <ul className="email-form__attachments">
    <h4 className="email-form__heading">Attached files</h4>
    {props.images.map((image, index) => (
      <li key={index} className="email-form__attachment">
        <img src={image.src} alt={image.name} className="email-form__image" />
      </li>
    ))}
  </ul>
);
export default ImagePreviews;
