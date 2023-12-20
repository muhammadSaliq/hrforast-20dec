import "./navbar.css";
import logo from '../../../Images/equipment suppliers logo mini.png'
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Navbars = () => {
  
  const navigate = useNavigate();
  let [user, setUser] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isUlVisible, setIsUlVisible] = useState(false);
  const [showList, setShowList] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();

  // console.log('Home Page');
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <nav className="nav bg-white flex flex-wrap items-center justify-between px-4">
      <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
        <div style={{ width: "220px" }} className="logo ">
          <Link to={"/"}>
          <img
              src="https://www.hrforecast.de/wp-content/uploads/2019/03/HRF_Logo_Wordpress.png"
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </div>
      </div>

      <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
        htmlFor="menu-btn"
        onClick={toggleMenu}
      >
        <span className="navicon bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul
        className={`menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto ${
          isMenuOpen ? "" : "hidden"
        }`}
        id="menu"
      >
        <li className="md:border-none mt-2    mr-4 text-black font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-black font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/aboutus">About Us</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-black font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/services">Services</Link>
        </li>
        {/* <li className="border-t md:border-none mt-2 mr-4 text-black font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/OurDocument">Our Documents</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-black font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/TechnicalService">Technical Services</Link>
        </li>
        <li className="border-t md:border-none mt-2 mr-4 text-black font-bold hover:text-blue-500 transition duration-300 ease-in-out">
          <Link to="/Contact">Contact</Link>
        </li> */}
        {user ? (
          <li className="border-t md:border-none mt-2 mr-4 text-black font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            <Link to="/UserDashboard">
              <span>
                User<i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </Link>
          </li>
        ) : null}
        {/* <Link to={"/CardPage"}>
          <li className="border-t md:border-none mt-2 mr-4 text-black font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </Link> */}
        {/* */}
        <NavLink to="/login">
          <button
            type="button"
            style={{ background: "rgb(236, 116, 12)" }}
            className="self-end text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-orange dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out"
          >
            Log In / Sign Up
          </button>
        </NavLink>
        
      </ul>


    </nav>
  );
};

export default Navbars;
