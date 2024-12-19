import React from 'react';
import Header from '../../shared/header/Header';
import Navber from '../../shared/Navber/Navber';
import LeftSideNav from '../../shared/leftSideNav/LeftSideNav';
import RightSideNav from '../../shared/rightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
          <h2 className="text-2xl">This is a Home pages</h2>
          <div className='grid grid-cols-1 md:grid-cols-4 '>
            <div className='border'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='border col-span-2'>
                <h2>News coming soon....</h2>
            </div>
            <div className='border'>
                <RightSideNav></RightSideNav>
            </div>
          </div>
        </div>
    );
};

export default Home;