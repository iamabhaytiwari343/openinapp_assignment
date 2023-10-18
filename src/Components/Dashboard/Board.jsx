import React, { useState } from 'react';
import Sidebar from './Sidebar';
import "./css/board.css";
import BarChart from './utils/BarChart';
import icon from "./utils/icon.png";
import Card from './utils/Cards';
import DonutChart from './utils/DonutChart';

const Board = () => {
  const guestData = [30, 45, 60, 70, 80]; // Replace with your guest data
  const userData = [40, 55, 70, 80, 90];


  return (
    <>
      <div className="pagecontent">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="maincontainerdashoard">
          <div className="cards">
            <Card icon={icon} vari="Total Revenue" totalRevenue="2129430" percentageChange="2.5" />
            <Card icon={icon} vari="Total Transaction" totalRevenue="1520" percentageChange="1.7" />
            <Card icon={icon} vari="Total Likes" totalRevenue="9721" percentageChange="1.4" />
            <Card icon={icon} vari="Total Users" totalRevenue="9721" percentageChange="4.2" />
          </div>
          <div className='bottomrightinhome'>
            <DonutChart />
          </div>
          <div className="chartcontainer-one">
            <BarChart guestData={guestData} userData={userData} className='chartstyles-bar' options={'responsive: true'} />
          </div>
        </div>
      </div>
    </>
  )
};

export default Board;
