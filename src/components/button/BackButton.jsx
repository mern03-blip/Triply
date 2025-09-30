import { Button } from "antd";
import PropTypes from "prop-types";
const BackButton = ({ onBack, disabled }) => {
  return (
    <Button
      onClick={onBack}
      disabled={disabled}
      className="bg-blue-500 text-whiteColor font-custom text-text1 font-b5"
    >
      ← Back
    </Button>
  );
};

BackButton.propTypes = {
  onBack: PropTypes.func,
  disabled: PropTypes.bool,
};

export default BackButton;
