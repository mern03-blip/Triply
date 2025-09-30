import { Alert } from "antd";
import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Alert message={`Error: ${message}`} type="error" showIcon />
    </div>
  );
};

// Define prop-types validation
Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
