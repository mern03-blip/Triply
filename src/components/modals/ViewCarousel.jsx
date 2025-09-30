import { Carousel } from "antd";
import PropTypes from "prop-types";

const ViewCarousel = ({ imageSrc }) => {
  return (
    <Carousel
      arrows
      infinite={false}
    >
      {imageSrc?.map((image, index) => (
        <div key={index}>
          <img
            src={image.path}
            alt={image.name}
            className="w-full h-[50vh] object-fit rounded-lg"
          />
        </div>
      ))}
    </Carousel>
  );
};

ViewCarousel.propTypes = {
  imageSrc: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ViewCarousel;
