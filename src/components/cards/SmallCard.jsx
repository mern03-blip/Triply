import React from 'react'
import { SaveBlue, SaveMain } from '../../assets/image'

const SmallCard = () => {
   
    //    <div className="grid grid-cols-12 gap-8 my-2">
    //         <div className="md:col-span-12 lg:col-span-8">
    //           <BookingsOverviewChart />
    //         </div>
    //         <div className="md:col-span-12 lg:col-span-4">
    //           <RevenueTrendsChart />
    //         </div>
    //       </div>



    return (
        <div className='grid grid-cols-12 gap-2'>

            <div className="lg:col-span-3  md:col-span-6 h-[130px] rounded-custom bg-whiteColor px-3 py-1 shadow-sm">

                {/* Top Section: Title and Icon */}
                <div className="flex items-center justify-between">
                    <p className="font-b5 text-text1 text-blackColor">
                        Total Bookings
                    </p>
                    <div className="flex h-12 w-12 items-center justify-center mt-2">
                        {/* <BookmarkOutlined style={{ fontSize: '24px' }} className="text-blueLightColor" /> */}
                        <img src={SaveBlue} alt='Save Icon' />
                    </div>
                </div>

                {/* Middle Section: Large Number */}
                <div className="mb-2">
                    {/* Note: text-4xl is a standard Tailwind class for a larger font size. 
            Adjust if you have a specific class in your config for this size. */}
                    <p className="font-b6 text-h2 text-blueColor">
                        2,847
                    </p>
                </div>

                {/* Bottom Section: Percentage Text */}
                <div className="mt-0">
                    <p className="font-b5 text-text1 text-blackColor">
                        +12% vs last month
                    </p>
                </div>

            </div>

            <div className="lg:col-span-3 md:col-span-6 h-[130px] rounded-custom bg-whiteColor px-3 py-1 shadow-sm">

                {/* Top Section: Title and Icon */}
                <div className="flex items-center justify-between">
                    <p className="font-b5 text-text1 text-blackColor">
                        Active Users
                    </p>
                    <div className="flex h-12 w-12 items-center justify-center mt-2 ">
                        {/* <BookmarkOutlined style={{ fontSize: '24px' }} className="text-blueLightColor" /> */}
                        <img src={SaveMain} alt='Save Icon' />
                    </div>
                </div>

                {/* Middle Section: Large Number */}
                <div className="mb-2">
                    {/* Note: text-4xl is a standard Tailwind class for a larger font size. 
            Adjust if you have a specific class in your config for this size. */}
                    <p className="font-b6 text-h2 text-mainColor">
                        18,392
                    </p>
                </div>

                {/* Bottom Section: Percentage Text */}
                <div className="mt-0">
                    <p className="font-b5 text-text1 text-blackColor">
                        +8%vs last month
                    </p>
                </div>

            </div>

            <div className="lg:col-span-3 md:col-span-6 h-[130px] rounded-custom bg-whiteColor px-3 py-1 shadow-sm">

                {/* Top Section: Title and Icon */}
                <div className="flex items-center justify-between">
                    <p className="font-b5 text-text1 text-blackColor">
                        Total Revenue
                    </p>
                    <div className="flex h-12 w-12 items-center justify-center mt-2">
                        {/* <BookmarkOutlined style={{ fontSize: '24px' }} className="text-blueLightColor" /> */}
                        <img src={SaveBlue} alt='Save Icon' />
                    </div>
                </div>

                {/* Middle Section: Large Number */}
                <div className="mb-2">
                    {/* Note: text-4xl is a standard Tailwind class for a larger font size. 
            Adjust if you have a specific class in your config for this size. */}
                    <p className="font-b6 text-h2 text-blackColor">
                        $124,850
                    </p>
                </div>

                {/* Bottom Section: Percentage Text */}
                <div className="mt-0">
                    <p className="font-b5 text-text1 text-blackColor">
                        +24%vs last month
                    </p>
                </div>

            </div>

            <div className="lg:col-span-3 md:col-span-6 h-[130px] rounded-custom bg-whiteColor px-3 py-1 shadow-sm">

                {/* Top Section: Title and Icon */}
                <div className="flex items-center justify-between">
                    <p className="font-b5 text-text1 text-blackColor">
                        Popular Destinations
                    </p>
                    <div className="flex h-12 w-12 items-center justify-center mt-2">
                        {/* <BookmarkOutlined style={{ fontSize: '24px' }} className="text-blueLightColor" /> */}
                        <img src={SaveBlue} alt='Save Icon' />
                    </div>
                </div>

                {/* Middle Section: Large Number */}
                <div className="mb-2">
                    {/* Note: text-4xl is a standard Tailwind class for a larger font size. 
            Adjust if you have a specific class in your config for this size. */}
                    <p className="font-b6 text-h2 text-blackColor">
                        156
                    </p>
                </div>

                {/* Bottom Section: Percentage Text */}
                <div className="mt-0">
                    <p className="font-b5 text-text1 text-blackColor">
                        +5% vs last month
                    </p>
                </div>

            </div>

        </div>

    )
}

export default SmallCard