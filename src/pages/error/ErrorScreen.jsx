import { Button, Typography } from "antd";
import { NavLink } from "react-router-dom";

const ErrorScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">

      <Typography className="text-4xl font-b7 text-secondaryColor flex gap-2 items-center justify-center border-secondaryColor rounded-full border-2 p-2 h-20 w-40 m-5">
        404!
      </Typography>
      <Typography className="text-2xl font-b6">page not found</Typography>
      <NavLink to="/" >
        <Button className="mt-5 bg-mainColor text-whiteColor border-custom">
          Back to Home ➲
        </Button>
      </NavLink>
    </div>
  );
};

export default ErrorScreen;
