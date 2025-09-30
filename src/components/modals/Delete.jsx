import PropTypes from "prop-types";
import { Button, Modal } from "antd";
import { useState } from "react";
import { DeleteUser } from "../../assets/image";

const Delete = ({ open, handleOk, handleCancel }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      handleOk();
    } catch {
      // message.error("Delete user failed. Please try again.");
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
      maskStyle={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
      footer={[
        <div className="flex gap-5 justify-center m-8" key="footer-buttons">
          <Button
            key="cancel"
            onClick={handleCancel}
            className="bg-skyBlueColor text-whiteColor font-custom font-b6"
          >
            Cancel
          </Button>
          <Button
            key="ok"
            type="primary"
            onClick={handleConfirm}
            loading={loading}
            className="bg-secondaryColor font-custom font-b6"
          >
            Delete
          </Button>
        </div>,
      ]}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="h-16 w-16">
          <img src={DeleteUser} alt="logout" />
        </div>
        <p className="text-text1 font-b6 font-custom">
          Are you sure you want to delete this user?{" "}
        </p>
      </div>
    </Modal>
  );
};

// Add PropTypes for validation
Delete.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default Delete;
