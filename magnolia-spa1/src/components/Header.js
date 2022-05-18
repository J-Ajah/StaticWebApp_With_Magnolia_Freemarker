import React from "react";

const Header = (props) => {
  const { navText1, navText2, navText3, pagesName } = props;
  return (
    <div className="header">
      <h2>{pagesName}</h2>

      <div className="links-container">
        <ul class="nav-links">
          <li>
            <a href="#About">{navText1}</a>
          </li>

          <li>
            <a href="#Services">{navText2}</a>
          </li>
          <li>
            <a href="#Feedback">{navText3}</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
