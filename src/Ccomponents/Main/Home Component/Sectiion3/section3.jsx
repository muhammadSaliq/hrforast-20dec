import React from 'react';
import './section3.css';
import img2 from '../../Home Component/img2.webp'

const Section3 = () => {



  const divStyle = {
   /*  backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    Other styles you might want to apply */
    
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

  return (
    <div className='flex justify-evenly flex-wrap my-4  bback' >
      <div style={containerStyle}>
      <h1 className="Heads"><b>Manage Your Employees:</b></h1>
        <p><br/>Manage your employees and their details like a professionals. Add new employee and fill in the details 
        along with current job details</p>
      </div>
      <div style={containerStyle}>
        <img src={img2} alt="" className="imgs" />

      </div>


      
    </div>
  );
}

export default Section3;
