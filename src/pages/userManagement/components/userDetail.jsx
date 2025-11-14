import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Radio, Avatar } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import "./UserDetail.scss"
import Header from "../../../layout/header/Header";

// --- Reusable Helper Component ---
// For displaying a piece of personal information.
const InfoItem = ({ label, value }) => (
  <div className="space-y-1">
    <p className="font-b6 text-h4 text-blackColor">{label}</p>
    <p className="font-b4 text-text1 text-blackColor">{value}</p>
  </div>
);

// --- Static User Detail Page Component ---
const UserDetail = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('Pending');

  // All user data is now a simple, hardcoded object.
  const staticUser = {
    fullName: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    registrationDate: 'March 15, 2024',
    lastLogin: 'December 28, 2024 - 2:30 PM',
    avatarUrl: 'https://thumbs.dreamstime.com/b/man-perfect-brilliant-smile-unshaven-face-defocused-background-guy-happy-emotional-expression-outdoors-bearded-man-124640934.jpg', // Placeholder avatar
    status: 'Active',
  };

  return (

    <>
      <div className="flex items-center justify-end w-full bg-whiteColor py-3 px-1">
        <div>
          <Header />
        </div>
      </div>
      <div className="font-custom min-h-screen  p-8">

        {/* --- Header Section --- */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="text-mainColor transition hover:opacity-75">
              <ArrowLeftOutlined style={{ fontSize: '24px' }} />
            </button>
            <h1 className="font-b6 text-[32px] text-blackColor">User Detail</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button className="!h-11 w-[120px] !rounded-custom !border-custom !bg-mainColor  !font-b7 !text-h4 !text-whiteColor">
              Edit
            </Button>
            <Button className="!h-11 w-[120px] !rounded-custom !border-custom !bg-redColor  !font-b7 !text-h4 !text-whiteColor">
              Delete
            </Button>
            <div className="flex items-center gap-3">
              <span className="font-b6 text-h3 text-blackColor">Status</span>
              <Radio.Group
                onChange={(e) => setStatus(e.target.value)}
                value={status}
                className="status-radio-group flex"
              >
                <Radio value="Pending">
                  <span className="font-b5 text-text1 text-blackColor">Pending</span>
                </Radio>
                <Radio value="Approved">
                  <span className="font-b5 text-text1 text-blackColor">Approved</span>
                </Radio>
              </Radio.Group>
            </div>
          </div>
        </header>

        {/* --- Main Content --- */}
        <main className="mt-8 space-y-8">
          {/* User Summary Card */}
          <div className="rounded-custom bg-whiteColor p-6 shadow-sm flex items-center gap-6">
            <Avatar size={80} src={staticUser.avatarUrl} />
            <div>
              <h2 className="font-b6 text-text4 text-blackColor">{staticUser.fullName}</h2>
              <p className="mt-1 font-b5 text-text4 text-[#1E1E1E80]">{staticUser.email}</p>
              <div className="mt-3 inline-block rounded-full bg-greenColor/10 px-4 py-1">
                <span className="font-b5 text-text4 text-[#18721E]">{staticUser.status}</span>
              </div>
            </div>
          </div>

          {/* Personal Information Card */}
          <div className="rounded-custom bg-whiteColor p-8 shadow-sm">
            <h3 className="font-b6 text-[22px] text-blackColor mb-8">Personal Information</h3>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
              <InfoItem label="Full Name" value={staticUser.fullName} />
              <InfoItem label="Email Address" value={staticUser.email} />
              <InfoItem label="Phone Number" value={staticUser.phone} />
              <InfoItem label="Location" value={staticUser.location} />
              <InfoItem label="Registration Date" value={staticUser.registrationDate} />
              <InfoItem label="Last Login" value={staticUser.lastLogin} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDetail;