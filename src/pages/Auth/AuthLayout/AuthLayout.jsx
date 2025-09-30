import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo } from '../../../assets/image'

const AuthLayout = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row max-w-[1600px] mx-auto">
                {/* Left Section */}
                <div className="flex-1 flex items-center justify-center h-auto w-auto">
                    <Outlet />
                </div>

                {/* Right Section */}

                <div className="hidden md:flex flex-1  bg-bgColor items-center justify-center h-auto w-auto">
                    <img src={Logo} alt="Login Image" className=" object-fit h-[auto] w-[60%]" />
                </div>
            </div>

        </>

    )
}

export default AuthLayout