import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// --- Helper Component for the Custom Rounded Bars ---
// This component creates the bars with rounded top corners.
const RoundedBar = (props) => {
    const { fill, x, y, width, height } = props;
    const radius = 6; // The roundness of the corners

    return (
        <g>
            <path
                d={`
          M${x + radius},${y} 
          H${x + width - radius} 
          A${radius},${radius} 0 0 1 ${x + width},${y + radius} 
          V${y + height - radius} 
          A${radius},${radius} 0 0 1 ${x + width - radius},${y + height} 
          H${x + radius} 
          A${radius},${radius} 0 0 1 ${x},${y + height - radius} 
          V${y + radius} 
          A${radius},${radius} 0 0 1 ${x + radius},${y} 
          Z
        `}
                fill={fill}
            />
        </g>
    );
};

// --- Helper Component for the Week/Month Toggle ---
const TimeframeToggle = ({ label, active, onClick }) => {
    return (
        <button onClick={onClick} className="flex items-center gap-2 cursor-pointer">
            {/* Custom radio-style icon */}
            <div className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${active ? 'border-mainColor' : 'border-custom'}`}>
                {active && <div className="h-2 w-2 rounded-full bg-mainColor"></div>}
            </div>
            <span className={`font-b5 text-h6 ${active ? 'text-black' : 'text-blackColor'}`}>{label}</span>
        </button>
    );
};


const BookingsOverviewChart = () => {
    // State to manage the active timeframe (Week or Month)
    const [activeTimeframe, setActiveTimeframe] = useState('Week');

    // Mock data that matches the chart in the image
    const data = [
        { day: 'Sat', week: 480, month: 250 },
        { day: 'Sun', week: 350, month: 130 },
        { day: 'Mon', week: 330, month: 270 },
        { day: 'Tue', week: 490, month: 380 },
        { day: 'Wed', week: 155, month: 250 },
        { day: 'Thu', week: 390, month: 250 },
        { day: 'Fri', week: 410, month: 345 },
    ];

    return (
        // Main container with styles from your config
        <div className="font-custom w-full  h-[340px]  rounded-custom bg-whiteColor p-6 shadow-sm flex flex-col">

            {/* Header Section */}
            <div className="flex items-center justify-between">
                <h2 className="font-b6 text-h4 text-mainColor">Bookings Overview</h2>
                <div className="flex items-center gap-4 text-mainColor">
                    <TimeframeToggle label="Week" active={activeTimeframe === 'Week'} onClick={() => setActiveTimeframe('Week')} />
                    <TimeframeToggle label="Month" active={activeTimeframe === 'Month'} onClick={() => setActiveTimeframe('Month')} />
                </div>
            </div>

            {/* Chart Section */}
            <div className="mt-8 w-full flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                        barGap={25}
                        barCategoryGap="20%"
                    >
                        <CartesianGrid strokeDasharray="" vertical={false} stroke="#DADADA" />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'blackColor', fontSize: 14, fontWeight: 500 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: 'blueColor', fontSize: 14, fontWeight: 500 }}
                            ticks={[0, 100, 200, 300, 400, 500]}
                            domain={[0, 500]}
                        />
                        <Tooltip cursor={{ fill: 'rgba(219, 219, 219, 0.2)' }} />

                        {/* Darker Red Bar */}
                        <Bar
                            dataKey="week"
                            fill="#FF5A5F" // Your redColor
                            shape={<RoundedBar />}
                        />

                        {/* Lighter Red Bar */}
                        <Bar
                            dataKey="month"
                            fill="#FF5A5F80" // Your redColor with ~50% opacity
                            shape={<RoundedBar />}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BookingsOverviewChart;   