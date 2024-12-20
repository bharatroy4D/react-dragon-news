import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";



const RightSideNav = () => {
    return (
        <div>
            <div className='m-5'>
                <h3 className="text-3xl mb-3">Login With</h3>
                <button className="btn btn-outline w-full">
                    <FcGoogle></FcGoogle>
                    <span>Login with google</span>
                </button>
                <button className="btn btn-outline w-full mt-3">
                    <IoLogoGithub ></IoLogoGithub>
                    <span>Login with Github</span>
                </button>
            </div>
        </div>
    );
};

export default RightSideNav;