import React from "react";
import PropTypes from "prop-types";

function Error({ message }) {
  return <div className="alert">{message}</div>;
}

Error.propTypes = {
  message: PropTypes.string,
};

Error.defaultProps = {
  message: "An error occurred",
};

export default Error;
