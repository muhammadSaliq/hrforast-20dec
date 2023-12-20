import React from 'react';
import './section5.css';
import img4 from '../../Home Component/img4.webp'

const Section5 = () => {



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
      <h1 className="Heads"><b>Provide Employees Retention Strategies:</b></h1>
        <p><br/>Get to know why employee is likely to leave and how can  you keep the employee for a long period of time</p>
      </div>
      <div style={containerStyle}>
        <img src={img4} alt="" className="imgs" />

      </div>


      
    </div>
  );
}

export default Section5;
