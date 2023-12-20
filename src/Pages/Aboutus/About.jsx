import React from "react";
import hr from '../../assets/hr.jpg'
import vision from '../../assets/vision.jpg'
import Footer from '../../Ccomponents/Footer/Footer';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';

import { useNavigate } from "react-router-dom";




const About = () => {

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
    height: '450px',
    marginBottom: '16px',
  };



  return (
    <>
<Navbars/>
<div className='flex  justify-evenly flex-wrap my-4' style={divStyle}>
      <div style={containerStyle}>
        <h1 className="text-3xl font-bold mb-5">Vision:</h1>
        <p>
        Our vision is to revolutionize human resource management by developing an innovative and data-driven HR management system. We aim to empower organizations to proactively address employee attrition, optimize workforce planning, and foster a more engaged and satisfied workforce. Our system will utilize predictive analytics and real-time data monitoring to provide actionable insights, helping organizations retain top talent and stay competitive in the ever-evolving business landscape.<br/>The agenda extends to creating a workplace where talent is nurtured, and employees feel valued. By harnessing the power of data and predictive analytics, we aim to transform HR into a strategic partner that drives organizational success, fosters innovation, and ensures a brighter future for businesses and their workforce.
        </p>
      </div>
      <div style={containerStyle}>
        <img src={hr} alt="Fairs" style={imageStyle} />
      </div>

      <div style={containerStyle}>
        <h1 className="text-3xl font-bold mb-5">Mission:</h1>
        <p>
        Our mission is to create a comprehensive HR management solution that combines the power of data analysis and machine learning to predict employee attrition accurately. We are committed to streamlining HR operations, offering insights into workforce dynamics, and recommending retention strategies. By providing HR professionals with the tools they need to make informed decisions, we aim to enhance employee satisfaction, improve organizational efficiency, and contribute to the success and growth of businesses.
<br/>We strive to make the workplace a better and more rewarding environment for both employees and employers by delivering a system that understands, predicts, and supports the evolving needs of the workforce.
      
        </p>
      </div>
      <div style={containerStyle}>
        <img src={vision} alt="Fairs" style={imageStyle} />
      </div>

      
    </div>
    <Footer/>
    </>
  );
};

export default About;
