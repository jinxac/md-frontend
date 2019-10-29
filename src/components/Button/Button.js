import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.css";

const propTypes = {
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const Button = ({
  description,
  onClick
}) => {
  return (
    <button
      className={"custom-button"}
      onClick={onClick}
    >
      {description}
    </button>
  );
};

Button.propTypes = propTypes;

export default Button;

