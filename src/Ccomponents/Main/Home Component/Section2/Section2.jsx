import React from 'react';
import './section2.css';
import img1 from '../../Home Component/img1.webp'

const Section2 = () => {



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
      <h1 className="Heads"><b>Easy-to-use Hr Software:</b></h1>
        <p><br/>No steep learning curves or bloated interfaces. HrForcast platform is simple yet powerful, 
         accessible and relevant to all HR rofessionals.</p>
      </div>
      <div style={containerStyle}>
        <img src={img1} alt="" className="imgs" />

      </div>


      
    </div>
  );
}

export default Section2;
