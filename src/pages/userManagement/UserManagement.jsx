import React from 'react'
import Header from "../../layout/header/Header";
import { Typography } from 'antd';
import { useState } from 'react'; // 1. Import useState
import { Table } from 'antd';
import { Dropdown, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { RedDots } from '../../assets/image';
import "../../components/Table/Table.scss";
import CustomPagination from '../../components/pagination/CustomPagination';


const StatusTag = ({ status }) => {
    // Map each status to its corresponding background and text color from your Tailwind config
    const colorMap = {
        Accepted: 'bg-greenColor/10 text-greenColor font-b5',
        Rejected: 'bg-yellowColor/10 text-yellowColor font-b5',
        Pending: 'bg-yellowColor/10 text-yellowColor font-b5',
    };
    return (
        <div className={`inline-block rounded-full px-4 py-1.5 ${colorMap[status]}`}>
            <span className="font-b6 text-h6">{status}</span>
        </div>
    );
};


const UserManagement = () => {
    const handleSearch = (term) => {
        setSearchTerm(term); // Update search term
    };
    const navigate = useNavigate();

    // 2. Add state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(12);

    // Mock data to populate the table. Replace this with your actual data source.
    const mockData = [
        { key: '1', name: 'John Doe', phone: '+1 (555) 123-4567', email: 'sarah.johnson@email.com', lastBooking: 'Dec 15, 2024', status: 'Accepted' },
        { key: '2', name: 'Jane Smith', phone: '+1 (555) 987-6543', email: 'michael.chen@email.com', lastBooking: 'Nov 28, 2024', status: 'Rejected' },
        { key: '3', name: 'Kevin Brown', phone: '+1 (555) 234-5678', email: 'emily.jones@email.com', lastBooking: 'Jan 10, 2025', status: 'Accepted' },
        { key: '4', name: 'Laura Wilson', phone: '+1 (555) 345-6789', email: 'daniel.kim@email.com', lastBooking: 'Feb 22, 2025', status: 'Pending' },
        { key: '5', name: 'Michael Johnson', phone: '+1 (555) 456-7890', email: 'olivia.wang@email.com', lastBooking: 'Mar 15, 2025', status: 'Accepted' },
        { key: '6', name: 'Nina Martinez', phone: '+1 (555) 567-8901', email: 'james.brown@email.com', lastBooking: 'Apr 10, 2025', status: 'Rejected' },
        { key: '7', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '8', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '9', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '10', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '11', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '12', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '13', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '14', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '15', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        { key: '16', name: 'Oliver Davis', phone: '+1 (555) 678-9012', email: 'sophia.liu@email.com', lastBooking: 'May 23, 2025', status: 'Accepted' },
        // Add more mock data as needed to fill the table
    ];

    // 3. Calculate which data to show on the current page
    const totalItems = mockData.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = mockData.slice(startIndex, endIndex);

    const menu = (record) => (
        <Menu>
            <Menu.Item
                key="details"
                onClick={() => navigate(`/userDetail/${record.key}`)} // navigate with user id/key
            >
                User Details
            </Menu.Item>
              <Menu.Item
                key="edit"
                className='mt-2'
                onClick={() => navigate(`/userDetail/${record.key}`)} // navigate with user id/key
            >
                Edit User
            </Menu.Item>
        </Menu>
    );

    // Define the columns for the Ant Design Table
    const columns = [
        {
            title: 'Profile',
            dataIndex: 'name',
            key: 'profile',
            render: (name) => (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-mainColor text-whiteColor font-b5 text-h6">
                    {name.charAt(0).toUpperCase()}
                </div>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
            render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
        },
        {
            title: 'Last Booking',
            dataIndex: 'lastBooking',
            key: 'lastBooking',
            render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => <StatusTag status={status} />,
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            width: "5%",
            render: (record) => (
                <Dropdown overlay={menu(record)} trigger={["click"]} placement="bottomRight">
                    <button>
                        <img src={RedDots} alt="More" />
                    </button>
                </Dropdown>
            ),
        },
    ];
    return (
        <div className='bg-lightBgColor pb-6'>

            <div className="flex items-center justify-between w-full bg-whiteColor py-3">

                <div className="flex flex-col ml-6">
                    <Typography className="font-b6 text-h2  text-blackColor">
                        User Management
                    </Typography>
                    <Typography className="font-b4 text-text1  text-blackColor">
                        {totalItems} Users
                    </Typography>
                </div>


                <div>
                    <Header
                        showSearch={true}
                        placeholder="Search here User"
                        handleSearch={handleSearch}
                    />
                </div>
            </div>

            <div className="my-10 mx-8">
                <div className="font-custom w-full overflow-hidden rounded-custom border border-custom bg-whiteColor shadow-sm">
                    <Table
                        className="custom-profile-table"
                        columns={columns}
                        dataSource={currentData} // 4. Use the sliced data
                        // dataSource={mockData}
                        pagination={false}
                        rowKey="key"
                    />

                    {/* Render the custom footer component */}
                    <CustomPagination
                        currentPage={currentPage}
                        pageSize={pageSize}
                        totalItems={totalItems}
                        onPageChange={setCurrentPage}
                        onPageSizeChange={(size) => {
                            setPageSize(size);
                            setCurrentPage(1); // Reset to first page when page size changes
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserManagement;