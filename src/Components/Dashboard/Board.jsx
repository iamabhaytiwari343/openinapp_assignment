import React from 'react';
import Navbar from './NavBar';
import Sidebar from './SideBar';
import './style.css';
import Chart from './Chart';
const Board = () => {
  return (
    <>
      <div className="grid-container2">
        <div className="sidebar">
          {/* Sidebar Content */}
          <Sidebar />
        </div>
        <div>
          <div className="navbar">
            <Navbar />
          </div>
          <Chart />
        </div>

      </div>

    </>
  )
}

export default Board