import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../../Ccomponents/Footer/Footer';
import DashNavbar from '../../../Ccomponents/Header/DashboardNavbar/DashNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';



const Negativeattrition = () => {

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      };
    
      const divStyle = {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#f44336', // Red background for warning
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        width: '80%',
        maxWidth: '600px',
        fontSize: '50px',
        animation: 'shake 1s infinite',
      };
    
      const animationKeyframes = `
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-5deg); }
          50% { transform: translateX(5px) rotate(5deg); }
          75% { transform: translateX(-5px) rotate(-5deg); }
          100% { transform: translateX(0); }
        }
      `;
    
      const mediaQuery = `
        @media (max-width: 768px) {
          ${divStyle} {
            fontSize: '40px';
            padding: '10px';
            maxWidth: '80%';
          }
        }
    
        @media (max-width: 480px) {
          ${divStyle} {
            fontSize: '30px';
          }
        }
      `;



    return(
        
        <>
      <Navbars />
      <div style={containerStyle}>
        <style>{animationKeyframes}</style>
        <style>{mediaQuery}</style>
        <div style={divStyle}>
          <p>Upss... Seems like your employee is about to switch!!</p>
        </div>
      </div>


      <div className='rootcontainer2' style={{ backgroundColor: 'white' }}>
            <Link to="/Attrition" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                        Get back
                    </Button>
                </Link>
            </div>
      <Footer />
    </>


       

    )

}

export default Negativeattrition 