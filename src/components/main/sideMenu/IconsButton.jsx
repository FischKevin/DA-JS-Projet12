import React from "react";
import PropTypes from 'prop-types';

function IconsButton(props) {
  const { icon, alt } = props;

  return (
    <button className="iconButton">
      <img src={icon} alt={alt} />
    </button>
  );
}

IconsButton.propTypes = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default IconsButton;
