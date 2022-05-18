import React from "react";
import parser from "html-react-parser";

const Footer = (props) => {
  const { title, commentTitle, comment, contactTitle, contactDetails } = props;

  const footerStyle = {
    backgroundColor: "#000000",
  };

  return (
    <div class="footer" id="Feedback" style={footerStyle}>
      <div class="feedback-container">
        <h3 class="feedback-caption">{title}</h3>

        <h5 class="comment-title">{commentTitle}</h5>

        <p class="comment">{parser(comment)}</p>
      </div>
      <div class="contact-container">
        <div class="comment-info">
          {" "}
          <h3 class="feedback-caption"> {contactTitle} </h3>
          <p class="comment">{parser(contactDetails)}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
