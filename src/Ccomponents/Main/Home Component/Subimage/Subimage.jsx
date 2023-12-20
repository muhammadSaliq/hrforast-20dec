import React from 'react';
import './subimage.css';
import img2 from '../../Home Component/img2.webp'
import { useNavigate } from 'react-router-dom/dist';

const Subimage = () => {


    const navigate = useNavigate();

  
  return (
    <>
    <div
      className="flex flex-col items-center justify-center mainContent"
      style={{ height: "90vh" }}
    >
      <div
        className="text-center"
        style={{ marginTop: "14%", height: "100vh" }}
      >
        {/* <img className="w-full max-w-lg" src={bull} alt="" /> */}
        
        <h1
          className="font-bold mid-para text-white heads"
          style={{ fontSize: "40px" }}
        >
          Your complete HR Management System
        </h1> 
        <p className="text-white TESTIMONIALS ">Automate and simplify HR processes. Fast. Accurate. Simple to use.</p>
         <div className="flex flex-col md:flex-row justify-center mt-6">
          <button onClick={() => {navigate("/login")}}
           
            className="text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded mb-2 md:mb-0 mr-0 md:mr-4 transition duration-300 ease-in-out btns"
          >
            Start Now
          </button>

        </div> 
      </div>
    </div>
    </>
  );
}

export default Subimage;
