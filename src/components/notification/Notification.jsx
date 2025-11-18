import { useState, useEffect } from "react";
import {
  Popover,
  Badge,
  Typography,
  List,
  Empty,
} from "antd";
import { Bell } from "../../assets/image";

// const capitalizeName = (name) => {
//   if (!name) return "";
//   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// };

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  // console.log(notifications);



  const content = (
    <div className="w-[280px]">
      <div className="flex justify-between items-center">
        <Typography className="text-h4 font-b6 font-custom">
          Notifications
        </Typography>
        {notifications.length > 0 ? (
          <Typography
            className="text-[10px] font-custom underline text-blue-400 cursor-pointer hover:text-[11px]"
            // onClick={handleMarkAllAsRead}
          >
            Mark all as read
          </Typography>
        ) : null}
      </div>
      {notifications.length > 0 ? (
        <List
          className="flex flex-col gap-2 p-2"
          dataSource={notifications}
          renderItem={(item) => (
            <List.Item className="p-2 border border-[#E9E9E9] rounded-md flex items-start mb-2">
              <div className="flex items-center">
                {/* <Avatar className="bg-secondaryColor mr-3 w-10">
                  {capitalizeName(item.name).charAt(0)}
                </Avatar> */}
                <div>
                  <Typography className="font-b5 text-text1">
                    {item.title}
                  </Typography>
                  <Typography className="text-[#A4A4A4]">
                    {item.service}
                  </Typography>
                </div>
              </div>
              <Typography className="text-[#316FB5] text-text2">
                {item.time}
              </Typography>
            </List.Item>
          )}
        />
      ) : (
        <Empty className="text-center text-gray-500" />
      )}
    </div>
  );

  return (
    <div>
      <Popover
        content={content}
        trigger="click"
        placement="bottomRight"
        arrow
      >

        <div className="border-custom h-14 w-14  p-3 rounded-custom bg-bgColor cursor-pointer">
          <Badge
            count={notifications.filter((notif) => !notif.isRead).length}
            showZero
            overflowCount={99}
            style={{ backgroundColor: "#E53935", color: "#fff" }}
          >
            <img src={Bell} alt="bell" />
          </Badge>
        </div>
      </Popover>
    </div>
  );
};

export default Notification;
