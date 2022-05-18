import React from "react";

const banner = (props) => {
  const { image, title } = props;

  const fewStyles = {
    backgroundColor: "#666666",
    backgroundImage: `url(http://localhost:8080${image["@link"]})`,
  };

  
  return (
    <div className="banner" style={fewStyles}>
      <div class="container bg-gradient-opacity-lefted">
        <div class="column">
          <div>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
