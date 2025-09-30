import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Select } from 'antd';
import './charts.scss';

// Mock data that creates a similar curve to the one in the image
const data = [
    { day: 'Mon', revenue: 102 },
    { day: 'Tue', revenue: 113 },
    { day: 'Wed', revenue: 122 },
    { day: 'Thu', revenue: 113 },
    { day: 'Fri', revenue: 144 },
    { day: 'Sat', revenue: 115 },
    { day: 'Sun', revenue: 130 },
];

const RevenueTrendsChart = () => {
    return (
        // Main card container
        <div className="w-full h-[340px] rounded-custom bg-whiteColor p-6 shadow-sm flex flex-col ">

            {/* --- Header Section --- */}
            <div className="flex items-start justify-between">
                <h2 className="font-b6 text-h4 text-mainColor">Revenue Trends</h2>

                {/* The <style> block has been removed from here */}

                <Select
                    defaultValue="month"
                    className="revenue-select" // The CSS in index.css will target this class
                >
                    <Select.Option value="month">Month</Select.Option>
                    <Select.Option value="week">Week</Select.Option>
                </Select>
            </div>

            {/* --- Data Points Header --- */}
            <div className="mt-6 grid grid-cols-7 text-center">
                {data.map((item) => (
                    <div key={item.day}>
                        <p className="font-b7 text-[10px] text-[#8A8A8A]">{item.day}</p>
                        <p className="mt-1 font-b7 text-[10px] text-blackColor">{item.revenue}</p>
                    </div>
                ))}
            </div>

            {/* --- Recharts Area Chart --- */}
            <div className="mt-4 flex-grow">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="20%" stopColor="#FF5A5F" stopOpacity={0.9} />
                                <stop offset="80%" stopColor="#FF5A5F80" stopOpacity={0.5} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="" vertical={true} horizontal={false} stroke="#DADADA" />

                        <XAxis dataKey="day" hide />
                        <YAxis hide />
                        <Tooltip
                            contentStyle={{
                                borderRadius: '10px',
                                borderColor: '#DBDBDB',
                                fontFamily: 'Poppins, sans-serif'
                            }}
                            labelStyle={{ fontWeight: '700', color: '#1E1E1E' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke=""
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#revenueGradient)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueTrendsChart;