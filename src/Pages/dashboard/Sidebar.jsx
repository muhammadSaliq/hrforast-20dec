import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({openSidebarToggle, OpenSidebar}) {

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h0><b>MENU</b></h0>
                {/* <BsCart3  className='icon_header'/> MENU */}
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <Link to="/dashboard">
                    <BsGrid1X2Fill className='icon inline-block'/> Dashboard
                    </Link>                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/dashboard">
                    <BsFillArchiveFill className='icon inline-block'/> Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to="/dashboard">
                                    <BsFillGrid3X3GapFill className='icon inline-block'/> Departments
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to={"/Addemployee"}>
                    <BsPeopleFill className='icon inline-block'/> Add Employees
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href={"/Attrition"}>
                    <BsListCheck className='icon inline-block'/> Employee Attrition
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon inline-block'/> Retention Strategies
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon inline-block'/> Get Mobile App
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar