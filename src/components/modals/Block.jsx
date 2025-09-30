import PropTypes from "prop-types";
import { Button, Modal } from "antd";
import { useState } from "react";
import { BlockUser } from "../../assets/image";

const Block = ({ open, handleOk, handleCancel, userStatus }) => {
  const [loading, setLoading] = useState(false);

  // Function to handle the block/unblock confirmation
  const handleConfirm = async () => {
    setLoading(true);
    try {
      // We don't need to manage status here as it's handled in the parent component
      await handleOk();
    } catch (error) {
      console.error("Error performing action:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = () => {
    if (userStatus === "active" || userStatus === "pending") {
      return "Are you sure you want to block this user?";
    } else {
      return "Are you sure you want to unblock this user?";
    }
  };

  const renderButtonText = () => {
    if (userStatus === "active" || userStatus === "pending") {
      return "Block";
    } else {
      return "Unblock";
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
            {renderButtonText()}
          </Button>
        </div>,
      ]}
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="h-16 w-16">
          <img src={BlockUser} alt="block user" />
        </div>
        <p className="text-text1 font-b6 font-custom">{renderMessage()}</p>
      </div>
    </Modal>
  );
};

Block.propTypes = {
  open: PropTypes.bool.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  userStatus: PropTypes.string.isRequired,
};

export default Block;
