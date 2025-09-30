import React, { useState } from 'react';
import { Table, Menu, Dropdown, Typography } from 'antd';
import { useNavigate } from "react-router-dom";
import { RedDots, SwissAlps, Tokyo } from '../../assets/image'; // Assuming you have these images
import "../../components/Table/Table.scss";
import Header from "../../layout/header/Header";
import CustomPagination from '../../components/pagination/CustomPagination';

// --- Helper Component for Status and Category Tags ---
const Accommodation = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

    const handleSearch = (term) => {
        setSearchTerm(term); // Update search term
    };
  // --- New Mock Data to match the "Hotels" design ---
  const mockData = Array.from({ length: 40 }, (_, i) => ({
    key: `${i + 1}`,
    image: i % 2 === 0 ? SwissAlps : Tokyo,
    hotelName: i % 2 === 0 ? 'Swiss Alps Adventure' : 'Tokyo City Explorer',
    roomType: i % 2 === 0 ? 'Suite' : 'Double',
    class: i % 2 === 0 ? 'Premium' : 'Standard',
    price: i % 2 === 0 ? '$289 USD' : '$149 USD',
    validity: 'Mar 15, 2024',
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

  // --- Updated Columns Definition for the "Hotels" table ---
  const columns = [
    {
      title: 'Hotels',
      dataIndex: 'hotelName',
      key: 'hotels',
      width: '30%',
      render: (text, record) => (
        <div className="flex items-center gap-4">
          <img src={record.image} alt={text} className="rounded-md object-cover" />
          <span className="font-b5 text-h6 text-blackColor">{text}</span>
        </div>
      ),
    },
    {
      title: 'Room Type',
      dataIndex: 'roomType',
      key: 'roomType',
      width: '15%',
      render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
      width: '15%',
      render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
    },
    {
      title: 'Price/Night',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
      render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
    },
    {
      title: 'Validity',
      dataIndex: 'validity',
      key: 'validity',
      width: '15%',
      render: (text) => <span className="font-b5 text-h6 text-blackColor">{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      // width: "10%",
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
            Accommodation Management
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

export default Accommodation;