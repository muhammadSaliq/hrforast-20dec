import React from 'react';
import './section4.css';
import img3 from '../../Home Component/img3.webp'

const Section4 = () => {



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
    <div className='flex justify-evenly flex-wrap my-4  back' >
      <div style={containerStyle}>
      <h1 className="Heads"><b>Machinne Learning Powered Employee Attrition:</b></h1>
    
        <p><br/>HrForast AI Engine simplifies the whole employee management process by predicting the 
             candidates likely to leave in near future.</p>
      </div>
      <div style={containerStyle}>
        <img src={img3} alt="" className="imgs" />

      </div>


      
    </div>
  );
}

export default Section4;
