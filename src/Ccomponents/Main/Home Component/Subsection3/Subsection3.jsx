import React from "react";
import img3 from '../../Home Component/img3.webp'

import { useNavigate } from "react-router-dom";




const Subsection3 = () => {

  const navigate = useNavigate();
  const divStyle = {
    /*  backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
     Other styles you might want to apply */
     backgroundColor: 'black',
    color: 'orange'
    };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    height: '400px',
    width: '650px', // Adjust the width as needed
    // // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  

  const buttonStyle = {
    background: '#EC0C36',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 16px',
    borderRadius: '8px',
    marginTop: '12px',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '650px',
    height: '400px',
    marginBottom: '16px',
  };



  return (
    <>

<div className='flex  justify-evenly flex-wrap my-4' style={divStyle}>
      <div style={containerStyle}>
        <h1 className="text-3xl font-bold mb-5">Machinne Learning Powered Employee Attrition:</h1>
        <p>HrForast AI Engine simplifies the whole employee management process by predicting the 
             candidates likely to leave in near future.</p>
      </div>
      <div style={containerStyle}>
        <img src={img3} alt="Fairs" style={imageStyle} />
      </div>


      
    </div>
    </>
  );
};

export default Subsection3;
