import { Input, Avatar } from "antd";
import PropTypes from "prop-types";
import Notification from "../../components/notification/Notification";
import { DP, Search } from "../../assets/image";

const Header = ({ showSearch, handleSearch }) => {

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    if (value === "") {
      handleSearch("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e.target.value);
    }
  };

  return (
    <div className="flex items-center justify-between w-full bg-whiteColor py-3">

      {/* Right Side: Search + Notification + Avatar */}
      <div className="flex items-center gap-4 mr-5">
        {showSearch && (
          <Input
            placeholder="Search"
            prefix={<img src={Search} />}
            className="w-[400px] h-[60px] rounded-custom font-custom text-h3 border-custom  bg-white"
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
          />
        )}

        {/* Notification Icon */}
        <Notification />

        {/* Avatar */}
        {/* <Avatar
          size={1}
          className="cursor-pointer w-[40px] h-[40px]"
          src="https://tinyjpg.com/images/social/website.jpg"
        /> */}
        <Avatar
          size={1}
          src={DP}
          className="cursor-pointer w-[70px] h-[63px] opacity-100 rounded-custom pt-[5px] pr-[8px] pb-[5px] pl-[8px]"
        />

      </div>
    </div>
  );
};

Header.propTypes = {
  showSearch: PropTypes.bool,
  handleSearch: PropTypes.func,
};

export default Header;
