import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../Ccomponents/Footer/Footer';
import DashNavbar from '../../Ccomponents/Header/DashboardNavbar/DashNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';



const Employeeattrition = () => {
    const navigate = useNavigate();
    const [allemployees, setallemployees] = useState([]);
    const [employeeBoolean, setemployeeBoolean] = useState(false);
    

    const buttonStyle = {
        background: '#EC0C36',
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        borderRadius: '8px',
        marginTop: '12px',
        cursor: 'pointer',
      };
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'start',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginTop: '15px',
        backgroundColor: '#f9f6ee',
        width: '350px'
      };


      const [alldepartmentss, setalldepartmentss] = useState([]);

      const [responce  , setResponce] = useState("");
    const [UpdatedbyUser  , setUpdatedbyUser] = useState("");

    const [singeemloyee  , setsingeemloyee] = useState("");


    

    const fetchSingleCustomer = async(id) => {
        const response = await axios.get(`http://localhost:8000/geteditemployee/${id}`);
        console.log("response: ", response);
      console.log(singeemloyee);
      setsingeemloyee(response.data.Product);
            }

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        setsingeemloyee(()=> {
            return {
                ...singeemloyee, [name]: value
            }
        })

 
    };
    

    

  const getAlldepartments = async () => {

    try {
      const response = await axios.get(`http://localhost:8000/alldepartments`);
      console.log("response: ", response);
      console.log(alldepartmentss);
      setalldepartmentss(response.data.data);
    } catch (error) {
      console.log("error in getting all Departments", error);
    }
  };

    

    
    
    
      const getAllemployee = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/allemployees`);
          console.log("response: ", response);
          console.log(allemployees);
          setallemployees(response.data.data);
        } catch (error) {
          console.log("error in getting all Departments", error);
        }
      };
      

    useEffect(() => {
        console.log('asdasd')
        getAllemployee()
        setemployeeBoolean(false)
    },)

    useEffect(() => {
      console.log('asdasd')
      getAlldepartments()
  },)

    
useEffect(() => {

  const getProfile = async () => {
    try {
      let response = await axios.get(`http://localhost:8000/api/v1/profile`,
        {
          withCredentials: true,
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
          }
        });
        console.log("response: ", response.data);
        setResponce(response.data)
        setUpdatedbyUser(responce.email);
        console.log("res",responce.email);
                      console.log("xx",UpdatedbyUser);


    } catch (error) {
      console.log("axios error: ", error);


    }

  }
  getProfile();

})

    return (
        <>
        <DashNavbar/>

       

        <div className='rootcontainer2' style={{ backgroundColor: 'white' }}>
                <h2 className="heado">Employee Attrition</h2>
            </div>
            <div className='flex  justify-evenly flex-wrap my-4' >
            {allemployees.map((value) => (
                    <div style={containerStyle}>
        <div className="divss">
        <h1 className="headoo ">{value.emloyeename}</h1>
        <h3 className="text-center mt-2 mb-2 h3head">{value.jobRole}</h3>
        <hr className='color-black'/>
</div>
        <span className="text-center inline mt-2">Department: {value.department}</span>
        <span className="text-center inline mt-2">Age: {value.age}</span>
        <span className="text-center inline mt-2">Gender: {value.gender}</span>
        <span className="text-center inline mt-2">Working Hours: {value.standardHours}</span> 
        <span className="text-center inline mt-2">Years in the Company: {value.yearsAtCompany}</span>

        <div className="flex mt-4 space-x-3 md:mt-6 justify-center">

       

<button
      onClick={() => {
        fetchSingleCustomer(value._id);
      }}
      className="relative inline-flex bg-black text-violet-500 items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-violet-700 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200"
    >
          Predict Attrition
    </button>

   
         </div>
      </div>
           ))}

               </div>

               <div className='rootcontainer2' style={{ backgroundColor: 'white' }}>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                        Your Dashboard
                    </Button>
                </Link>
            </div>

            <Footer/>
        </>
    );
}

export default Employeeattrition 