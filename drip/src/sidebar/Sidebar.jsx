import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img src="https://via.placeholder.com/250" alt="" />
      <p>sdgfasdgasdgasdfasdfasdfasdfsadfasdfasdfgasdgfsadgsdfg</p>
    </div>
    <div className='sidebarItem'>
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarLis">
            <li className="sidebarListIteam">Life</li>
            <li className="sidebarListIteam">Life</li>
            <li className="sidebarListIteam">Life</li>
            <li className="sidebarListIteam">Life</li>
            <li className="sidebarListIteam">Life</li>
            <li className="sidebarListIteam">Life</li> 
        </ul>
        <div>
        
        </div>
    </div>
    </div>
  );
}
