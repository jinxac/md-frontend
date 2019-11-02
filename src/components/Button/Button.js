import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const defaultProps = {
  isPrimary: false,
  type: "submit"
};

const propTypes = {
  description: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string
};

const Button = ({
  description,
  isPrimary,
  onClick,
  type
}) => {
  let className = `${styles.button}`;
  if (isPrimary) {
    className += ` ${styles.primary}`;
  }
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {description}
    </button>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;

