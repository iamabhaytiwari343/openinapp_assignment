import React from 'react';
import Sidebar from './Sidebar';
import "./css/board.css";
import DemoPieChart from './utils/DemoPieChart';
import BarChart from './utils/BarChart';
import icon from "./utils/icon.png";
import Card from './utils/Cards';

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
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className="cards">
            <Card icon={icon} totalRevenue="269872" percentageChange="2.4" />
            <Card icon={icon} totalRevenue="269872" percentageChange="2.4" />
            <Card icon={icon} totalRevenue="269872" percentageChange="2.4" />
            <Card icon={icon} totalRevenue="269872" percentageChange="2.4" />
          </div>
          <BarChart guestData={guestData} userData={userData} />
          <div className='bottomrightinhome'>
            <DemoPieChart />
          </div>




        </div>
      </div>
    </>
  )
}

export default Board