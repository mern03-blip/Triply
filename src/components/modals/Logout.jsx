import PropTypes from "prop-types";
import { Button, Modal, message } from "antd";
import { useState } from "react";
import { LogoutModal } from "../../assets/image";

const Logout = ({ open, handleOk, handleCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      handleOk();
      message.success("Logged out successfully.");
    } catch {
      message.error("Logout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      className="custom"
      open={open}
      onCancel={handleCancel}
      mask={true}
      Style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      footer={[
        <div className="flex gap-5 justify-center m-8" key="footer-buttons">
          <Button
            key="cancel"
            onClick={handleCancel}
            className="bg-mainColor text-whiteColor font-custom border-custom font-b6"
          >
            Cancel
          </Button>
          <Button
            key="ok"
            type="primary"
            onClick={handleConfirm}
            loading={loading}
            className="bg-redColor font-custom font-b6"
          >
            Logout
          </Button>
        </div>,
      ]}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="h-16 w-16">
          <img src={LogoutModal} alt="logout" />
        </div>
        <p className="text-text1 font-b6 font-custom">
          Are you sure you want to logout?
        </p>
      </div>
    </Modal>
  );
};

// Add PropTypes for validation
Logout.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Logout;
