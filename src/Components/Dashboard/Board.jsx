import React from 'react';
import Sidebar from './Sidebar';
import "./css/board.css";
import DemoPieChart from './utils/DemoPieChart';

const Board = () => {
  return (
    <>
      <div className="pagecontent">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="maincontainerdashoard">
          <DemoPieChart />
          

        </div>
      </div>
    </>
  )
}

export default Board