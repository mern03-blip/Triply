import { useState, useEffect } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import "./customModal.scss";

const View = ({ open, handleCancel, documents, imageSrc }) => {
  const [blobUrl, setBlobUrl] = useState("");

  useEffect(() => {
    if (imageSrc) {
      // Handle local file paths starting with 'file://'
      if (imageSrc.startsWith("file:///")) {
        fetch(imageSrc)
          .then((response) => response.blob())
          .then((blob) => {
            const url = URL.createObjectURL(blob);
            setBlobUrl(url);
          })
          .catch((error) => console.error("Error creating Blob URL:", error));
      } else {
        setBlobUrl(imageSrc);
      }
    }
  }, [imageSrc]);

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
      <div className="image-container">
        {blobUrl ? (
          <iframe
            src={blobUrl}
            title="Document Preview"
            frameBorder="0"
            className="w-full h-full object-contain"
          />
        ) : documents && documents.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 items-center">
            {documents.map((doc, index) => (
              <img
                key={index}
                src={doc}
                alt={`User License ${index + 1}`}
                className="w-full h-[90%] object-fill"
              />
            ))}
          </div>
        ) : (
          <p>No documents available</p>
        )}
      </div>
    </Modal>
  );
};

// Correctly define prop-types validation
View.propTypes = {
  open: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  documents: PropTypes.array,
  imageSrc: PropTypes.string,
};

export default View;
