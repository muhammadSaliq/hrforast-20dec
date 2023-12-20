import React from "react";
import img1 from '../../Home Component/img1.webp'

import { useNavigate } from "react-router-dom";




const Subsection = () => {

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
        <h1 className="text-3xl font-bold mb-5">Easy-to-use Hr Software:</h1>
        <p>No steep learning curves or bloated interfaces. HrForcast platform is simple yet powerful, 
         accessible and relevant to all HR rofessionals.</p>
      </div>
      <div style={containerStyle}>
        <img src={img1} alt="Fairs" style={imageStyle} />
      </div>


      
    </div>
    </>
  );
};

export default Subsection;
