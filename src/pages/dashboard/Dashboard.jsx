import { Typography } from "antd";
import Header from "../../layout/header/Header";
import SmallCard from "../../components/cards/SmallCard";
import BookingsOverviewChart from "../../components/charts/BookingsOverviewChart";
import RevenueTrendsChart from "../../components/charts/RevenueTrendsChart";
import QuickActionsCard from "../../components/cards/QuickActionsCard";

const Dashboard = () => {

  const handleSearch = (term) => {
    setSearchTerm(term); // Update search term
  };


  return (
    <>
      <div className="bg-lightBgColor">

        {/* Header  */}
        <div className="flex items-center justify-between w-full bg-whiteColor py-3 px-1">

          <div className="flex flex-col ml-6">
            <span className="text-[22px] font-b6 text-blackColor">
              Dashboard
            </span>
            <span className="text-text1 font-b4 text-blackColor">
              Welcome Back Admin
            </span>
          </div>

          <div>
            <Header
              showSearch={true}
              placeholder="Search here User"
              handleSearch={handleSearch}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 py-5 px-2 mx-5 my-5">
          <Typography className="font-b6 text-h2 font-custom text-blackColor">
            Dashboard
          </Typography>
          {/* // --- Replace your existing block with this new card --- */}
          <div className="my-2">
            <SmallCard />
          </div>

          {/* <div className="flex  gap-8  my-2">
            <BookingsOverviewChart />
            <RevenueTrendsChart />
          </div> */}

          <div className="grid grid-cols-12 gap-8 my-2">
            <div className="md:col-span-12 lg:col-span-8">
              <BookingsOverviewChart />
            </div>
            <div className="md:col-span-12 lg:col-span-4">
              <RevenueTrendsChart />
            </div>
          </div>


          <div>
            <Typography className="font-b6 text-h2 font-custom text-blackColor mb-5">
              Quick Actions
            </Typography>
            <div>
              <QuickActionsCard />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
