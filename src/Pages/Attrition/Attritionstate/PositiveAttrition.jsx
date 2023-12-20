import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../../Ccomponents/Footer/Footer';




const Positiveattrition = () => {





    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      };
    const divStyle = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '50px',
        textAlign: 'center',
        backgroundColor: '#64b5f6',
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        maxWidth: '1000px',
        margin: '0 auto',
        animation: 'bounce 1s infinite alternate',
      };
    
      const animationKeyframes = `
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
      `;

      const mediaQuery = `
    @media (min-width: 768px) {
      ${divStyle} {
        fontSize: '14px';
        padding: '8px';
        maxWidth: '250px';
      }
    }
  `;

    


    return(
        <>
        <Navbars/>


        <div style={containerStyle}>
      <style>{animationKeyframes}</style>
      <style>{mediaQuery}</style>
      <div style={divStyle}>
      <p>Hmmm... Seems like your Employee is not going anywhere!!</p>
      </div>
    </div>

    <div className='rootcontainer2' style={{ backgroundColor: 'white' }}>
            <Link to="/Attrition" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                        Get back
                    </Button>
                </Link>
            </div>
        <Footer/>
        </>


        


       

    )
}

export default Positiveattrition 