import React from 'react';
import './aboutus.css';
import hr from '../../assets/hr.jpg'
import vision from '../../assets/vision.jpg'
import Footer from '../../Ccomponents/Footer/Footer';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';

const Aboutus = () => {



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
    <div>
         <Navbars/>
    <div className='flex justify-evenly flex-wrap my-4  back1' >
       
      <div style={containerStyle}>
      <h2 className="Hheads"><b>Vision:</b></h2>
        <p><br/>Our vision is to revolutionize human resource management by developing an innovative and data-driven HR management system. We aim to empower organizations to proactively address employee attrition, optimize workforce planning, and foster a more engaged and satisfied workforce. Our system will utilize predictive analytics and real-time data monitoring to provide actionable insights, helping organizations retain top talent and stay competitive in the ever-evolving business landscape.<br/>The agenda extends to creating a workplace where talent is nurtured, and employees feel valued. By harnessing the power of data and predictive analytics, we aim to transform HR into a strategic partner that drives organizational success, fosters innovation, and ensures a brighter future for businesses and their workforce.</p>
      </div>
      <div style={containerStyle}>
        <img src={hr} alt="" className="imgs1" />

      </div>
      <div style={containerStyle}>
      <h2 className="Hhheads"><b>Mission:</b></h2>
        <p><br/>Our mission is to create a comprehensive HR management solution that combines the power of data analysis and machine learning to predict employee attrition accurately. We are committed to streamlining HR operations, offering insights into workforce dynamics, and recommending retention strategies. By providing HR professionals with the tools they need to make informed decisions, we aim to enhance employee satisfaction, improve organizational efficiency, and contribute to the success and growth of businesses.
<br/>We strive to make the workplace a better and more rewarding environment for both employees and employers by delivering a system that understands, predicts, and supports the evolving needs of the workforce.</p>      </div>
      <div style={containerStyle}>
        <img src={vision} alt="" className="imgs2" />

      </div>


      
    </div>
    <Footer/>
    </div>
    
  );
  
}

export default Aboutus;
