import { Col, Row, Typography } from "antd";
import PropTypes from "prop-types";

const ServiceCard = ({
  headerTitle,
  orderDetails,
  providerDetails,
  additionalProviderInfo,
}) => {
  return (
    <div className="border-1 rounded-tl-md rounded-tr-md">
      {/* Header Section */}
      <Row className="card_header bg-[#044A8E33] border rounded-tr-md rounded-tl-md">
        <Typography className="text-h4 font-b6 text-black p-4">
          {headerTitle}
        </Typography>
      </Row>

      {/* Details Section */}
      <Row className="w-full bg-[#eef7fb] px-9 py-4">
        {/* Left Column */}
        <Col span={12} className="flex gap-6 flex-col pr-4">
          {orderDetails?.map((detail, index) => (
            <Row key={index} className="">
              <Col span={12} className="font-b6 font-custom text-text1 text-T1">
                {detail.label}
              </Col>

              <Col span={12} className="font-custom text-text1 text-A1">
                {detail.value}
              </Col>
            </Row>
          ))}
        </Col>

        {/* Right Column */}
        <Col span={12} className="flex gap-6 flex-col">
          {providerDetails?.map((detail, index) => (
            <Row key={index} className="">
              <Col span={12} className="font-b6 font-custom text-text1 text-T1">
                {detail.label}
              </Col>
              <Col span={12} className="font-custom text-text1 text-A1">
                {detail.value}
              </Col>
            </Row>
          ))}
          {additionalProviderInfo?.map((detail, index) => (
            <Row key={index} className="">
              <Col span={12} className="font-b6 font-custom text-text1 text-T1">
                {detail.label}
              </Col>
              <Col span={12} className="font-custom text-text1 text-A1">
                {detail.value}
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
};

// PropTypes validation
ServiceCard.propTypes = {
  headerTitle: PropTypes.string.isRequired, // headerTitle must be a string and is required
  orderDetails: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Each object must have a 'label' (string)
      value: PropTypes.string.isRequired, // Each object must have a 'value' (string)
    })
  ).isRequired, // orderDetails must be an array of objects and is required
  providerDetails: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Each object must have a 'label' (string)
      value: PropTypes.string.isRequired, // Each object must have a 'value' (string)
    })
  ).isRequired, // providerDetails must be an array of objects and is required
  additionalProviderInfo: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // Each object must have a 'label' (string)
      value: PropTypes.string.isRequired, // Each object must have a 'value' (string)
    })
  ).isRequired,
};

export default ServiceCard;
