import { Modal } from "antd";
import PropTypes from "prop-types";
import "./customModal.scss";
import ViewCarousel from "./ViewCarousel";

const ViewDoc = ({
  open,
  handleCancel,
  // documents, 
  imageSrc
}) => {
  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      footer={null}
      centered
      className="custom-modal"
      maskStyle={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <ViewCarousel imageSrc={imageSrc}/>
    </Modal>
  );
};
// Correctly define prop-types validation
ViewDoc.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  documents: PropTypes.array,
  imageSrc: PropTypes.string,
};

export default ViewDoc;
