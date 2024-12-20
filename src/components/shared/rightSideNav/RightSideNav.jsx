import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import qZone1 from '../../../assets/swimming.png';
import qZone2 from '../../../assets/class.png';
import qZone3 from '../../../assets/playground.png';

const RightSideNav = () => {
    return (
        <div>
            {/* LOGIN DIV */}
            <div className='p-5 space-y-3 mb-5'>
                <h3 className="text-3xl ">Login With</h3>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>
                    <span>Login with google</span>
                </button>
                <button className="btn btn-outline w-full ">
                    <IoLogoGithub ></IoLogoGithub>
                    <span>Login with Github</span>
                </button>
            </div>
            {/* Find us div */}
            <div className='p-5  mb-5'>
                <h3 className="text-3xl mb-3">Find Us On</h3>
               <a className='flex items-center justify-center border rounded-t-lg p-4 ' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>facebook</span>
               </a>
               <a className='flex items-center justify-center border-x p-4 ' href="">
                    <FaSquareXTwitter className='mr-3'></FaSquareXTwitter>
                    <span>Twitter</span>
               </a>
               <a className='flex items-center justify-center border rounded-b-lg p-4 ' href="">
                    <FaInstagram className='mr-3'></FaInstagram>
                    <span>Instagram</span>
               </a>
            </div>
            {/* Q Zone */}
            <div className='p-5  mb-5'>
                <h3 className="text-3xl mb-3">Q Zone</h3>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
               
            </div>
        </div>

    );
};

export default RightSideNav;