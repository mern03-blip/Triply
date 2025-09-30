import React, { useState } from 'react';
import { Table, Menu, Dropdown, Typography } from 'antd';
import { useNavigate } from "react-router-dom";
import { RedDots, SwissAlps, Tokyo } from '../../assets/image'; // Assuming you have these images
import "../../components/Table/Table.scss";
import Header from "../../layout/header/Header";
import CustomPagination from '../../components/pagination/CustomPagination';

// --- Helper Component for Status and Category Tags ---
const InfoTag = ({ text, type = 'status' }) => {
  // Map types and text to their corresponding colors from your Tailwind config
  const colorMap = {
    status: {
      Active: 'bg-greenColor/10 text-greenColor',
      Inactive: 'bg-yellowColor/10 text-yellowColor',
    },
    category: {
      Mountain: 'bg-greenColor/10 text-greenColor',
      City: 'bg-greenColor/10 text-greenColor', // You can change this color if needed
    }
  };

  const style = colorMap[type][text] || 'bg-primaryColor/10 text-primaryTextColor';

  return (
    <div className={`inline-block rounded-full px-4 py-1.5 ${style}`}>
      <span className="font-b6 text-h6">{text}</span>
    </div>
  );
};


const Destination = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const handleSearch = (term) => {
    setSearchTerm(term); // Update search term
  };

  // --- New Mock Data to match the design ---
  const mockData = Array.from({ length: 40 }, (_, i) => ({
    key: `${i + 1}`,
    image: i % 2 === 0 ? SwissAlps : Tokyo,
    destination: i % 2 === 0 ? 'Swiss Alps Adventure' : 'Tokyo City Explorer',
    description: i % 2 === 0 ? 'Breathtaking mountain experience' : 'Urban adventure in Japan',
    category: i % 2 === 0 ? 'Mountain' : 'City',
    created: 'Mar 15, 2024',
    status: i % 2 === 0 ? 'Active' : 'Inactive',
  }));

  const totalItems = mockData.length;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = mockData.slice(startIndex, endIndex);

  const menu = (record) => (
    <Menu>
      <Menu.Item key="edit">Edit</Menu.Item>
      <Menu.Item key="delete" danger>Delete</Menu.Item>
    </Menu>
  );

  // --- Updated Columns Definition ---
  const columns = [
    {
      title: 'Destination',
      dataIndex: 'destination',
      key: 'destination',
      width: '35%',
      render: (text, record) => (
        <div className="flex items-center gap-4">
          <img src={record.image} alt={text} className=" rounded-md object-cover" />
          <div>
            <p className="font-b6 text-h6 text-blackColor">{text}</p>
            <p className="mt-1 font-b5 text-text2 text-blackColor">{record.description}</p>
          </div>
        </div>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '15%',
      render: (category) => <InfoTag text={category} type="category" />,
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      width: '20%',
      render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '15%',
      render: (status) => <InfoTag text={status} type="status" />,
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      width: "10%",
      render: (record) => (
        <Dropdown menu={menu(record)} trigger={["click"]} placement="bottomRight">
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
            Destination Management
          </Typography>
          {/* <Typography className="font-b4 text-text1 font-custom text-blackColor">
            {totalItems} Users
          </Typography> */}
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

export default Destination;