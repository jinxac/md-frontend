import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const defaultProps = {
  isPrimary: false
};

const propTypes = {
  description: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

const Button = ({
  description,
  isPrimary,
  onClick
}) => {
  let className = `${styles.button}`;
  if (isPrimary) {
    className += ` ${styles.primary}`;
  }
  return (
    <button
      className={className}
      onClick={onClick}
    >
      {description}
    </button>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;

