import React from 'react';
import Sidebar from './Sidebar';
import "./css/board.css";
const Board = () => {
  return (
    <>
      <div className="pagecontent">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="maincontainerdashoard">
          
          <div class="horizontal-navbar">
            <p>Dashboard</p>
            <div class="search-bar">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
            <i class="fas fa-bell"></i>
            <div class="profile-circle">
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Board