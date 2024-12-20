import React from 'react';
import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <div className='flex w-4/5 m-auto bg-slate-800 border'>
            <span className='p-4'>
            <button className='btn btn-secondary w-36 '>Breaking News</button>
            </span>
            <Marquee pauseOnHover={true}>
                MY name is Bharat roy. I am a Front-end Web Developer, I Can Html, Css, Tailwind, Java Script Etc. 
            </Marquee>

        </div>
    );
};

export default BreakingNews;