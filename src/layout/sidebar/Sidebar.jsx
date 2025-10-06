import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import Logout from "../../components/modals/Logout";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";
import {
  Approve,
  Block,
  FoodDinner,
  Golf,
  Logo2,
  Power,
  SidebarBell,
  SidebarUser,
  Spa,
  SquareList,
  UsersIcon,
} from "../../assets/image";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: Block,
    link: "/",
    paths: ["/"],
  },
  {
    name: "User Management",
    icon: SquareList,
    link: "/userManagement",
    paths: ["/userManagement", "/userDetail", "/editUserDetail"],
  },
  {
    name: "Destination",
    icon: Golf,
    link: "/destination",
    paths: ["/destination"],
  },
  {
    name: "Flight / Transport",
    icon: Spa,
    link: "/flight-Transport",
    paths: ["/flight-Transport"],
  },
  {
    name: "Accommodation",
    icon: FoodDinner,
    link: "/accommodation",
    paths: ["/accommodation"],
  },
  {
    name: "Restaurant & Menu",
    icon: UsersIcon,
    link: "/restaurant-menu",
    paths: ["/restaurant-menu"],
  },
  {
    name: "Activity / Experience",
    icon: Approve,
    link: "/activity-experience",
    paths: ["/activity-experience"],
  },
  {
    name: "Trip Approval",
    icon: Approve,
    link: "/trip-approval",
    paths: ["/trip-approval"],
  },
  {
    name: "Revenue & Reports",
    icon: Approve,
    link: "/revenue-reports",
    paths: ["/revenue-reports"],
  },
];

const sidebarBottomItems = [
  {
    name: "My Profile",
    icon: SidebarUser,
    link: "/my-profile",
    paths: ["/my-profile"],
  },
  {
    name: "Notifications",
    icon: SidebarBell,
    link: "/notifications",
    paths: ["/notifications"],
  },
  {
    name: "Logout",
    icon: Power,
    isLogout: true,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const isActiveRoute = (item) => {
    if (!item.paths) return false;
    if (location.pathname === "/" && item.link === "/") {
      return true;
    }
    return item.paths.some((path) => {
      if (path === "/") return false;
      return location.pathname.startsWith(path);
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  const showLogoutModal = () => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsLogoutModalOpen(false);
  };

  return (
    <div className="h-auto bg-whiteColor text-white w-[100%]">
      <div className="text-center py-3 mb-4">
        <img className="mx-auto w-[175px] h-auto" src={Logo2} alt="Logo" />
      </div>

      <div className="flex flex-col justify-between">
        {/* Top Sidebar Items */}
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className="mb-4 mx-8 relative font-custom">
              {item.isLogout ? (
                <a
                  href="#"
                  onClick={showLogoutModal}
                  className="flex items-center text-[18px] font-b5 py-3 rounded-custom text-blackColor before-class"
                >
                  <img className="mr-3 w-6 flex-shrink-0" src={item.icon} alt={item.name} />
                  <span className="truncate block">{item.name}</span>
                </a>
              ) : (
                <Link
                  to={item.link}
                  className={`flex items-center text-[18px] font-b5 py-3 px-1 rounded-custom before-class ${isActiveRoute(item)
                    ? "bg-mainColor !text-whiteColor font-b6 rounded-custom active"
                    : "text-[#1E1E1E80] "
                    }`}
                >
                  <img
                    className="mr-3 w-6 flex-shrink-0"
                    style={{ filter: `${isActiveRoute(item) ? "brightness(40)" : "none"}` }}
                    src={item.icon}
                    alt={item.name}
                  />
                  <span className="truncate block">{item.name}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Bottom Sidebar Items */}
        <div className="border-t border-[#DBDBDB]">
          <ul className="mt-8">
            {sidebarBottomItems.map((item, index) => (
              <li key={index} className="mb-4 mx-8 relative font-custom">
                {item.isLogout ? (
                  <a
                    href="#"
                    onClick={showLogoutModal}
                    className="flex items-center text-[18px] font-b5 py-3 px-1.5 rounded-custom text-blackColor hover:bg-mainColor hover:text-whiteColor"
                  >
                    <img className="mr-3 w-6 flex-shrink-0"
                      style={{ filter: `${isActiveRoute(item) ? "brightness(40)" : "none"}` }}
                      src={item.icon} alt={item.name} />
                    <span className="truncate block">{item.name}</span>
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className={`flex items-center text-[18px] font-b5 py-3 px-1.5 rounded-custom text-blackColor before-class ${isActiveRoute(item)
                      ? "bg-mainColor text-whiteColor font-b6 rounded-custom active"
                      : ""
                      }`}
                  >
                    <img
                      className="mr-3 w-6 flex-shrink-0"
                      style={{ filter: `${isActiveRoute(item) ? "brightness(40)" : "none"}` }}
                      src={item.icon}
                      alt={item.name}
                    />
                    <span className="truncate block ">{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logout Modal */}
      <Logout open={isLogoutModalOpen} handleOk={handleLogout} handleCancel={closeLogoutModal} />
    </div>
  );
};

export default Sidebar;