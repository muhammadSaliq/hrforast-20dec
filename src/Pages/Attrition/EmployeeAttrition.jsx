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
    const [emloyeename, setemloyeename] = useState("");
    const [age, setAge] = useState("");
    const [attrition, setAttrition] = useState("");
    const [businessTravel, setBusinessTravel] = useState("");
    const [dailyRate, setDailyRate] = useState("");
    const [department, setDepartment] = useState("");
    const [distanceFromHome, setDistanceFromHome] = useState("");
    const [education, setEducation] = useState("");
    const [educationField, setEducationField] = useState("");
    const [employeeCount, setEmployeeCount] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [environmentSatisfaction, setEnvironmentSatisfaction] = useState("");
    const [gender, setGender] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [jobInvolvement, setJobInvolvement] = useState("");
    const [jobLevel, setJobLevel] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [jobSatisfaction, setJobSatisfaction] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [monthlyRate, setMonthlyRate] = useState("");
    const [numCompaniesWorked, setNumCompaniesWorked] = useState("");
    const [over18, setOver18] = useState("");
    const [overTime, setOverTime] = useState("");
    const [percentSalaryHike, setPercentSalaryHike] = useState("");
    const [performanceRating, setPerformanceRating] = useState("");
    const [relationshipSatisfaction, setRelationshipSatisfaction] = useState("");
    const [standardHours, setStandardHours] = useState("");
    const [stockOptionLevel, setStockOptionLevel] = useState("");
    const [totalWorkingYears, setTotalWorkingYears] = useState("");
    const [trainingTimesLastYear, setTrainingTimesLastYear] = useState("");
    const [workLifeBalance, setWorkLifeBalance] = useState("");
    const [yearsAtCompany, setYearsAtCompany] = useState("");
    const [yearsInCurrentRole, setYearsInCurrentRole] = useState("");
    const [yearsSinceLastPromotion, setYearsSinceLastPromotion] = useState("");
    const [yearsWithCurrManager, setYearsWithCurrManager] = useState("");


    const [allemployees, setallemployees] = useState([]);
    const [employeeBoolean, setemployeeBoolean] = useState(false);
        // Snackbar state variables
        const [openSnackbar, setOpenSnackbar] = useState(false);
        const [snackbarMessage, setSnackbarMessage] = useState('');
        const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    
        //emp add variable
        const [CreatedbyUser  , setCreatedbyUser] = useState("");
        
    //result
    const [resultattr , setresultattr] = useState();

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
        const response = await axios.get('http://localhost:8000/geteditemployee/${id}');
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
      const response = await axios.get('http://localhost:8000/alldepartments');
      console.log("response: ", response);
      console.log(alldepartmentss);
      setalldepartmentss(response.data.data);
    } catch (error) {
      console.log("error in getting all Departments", error);
    }
  };

    
  const attritionemloyee = async () => {

        try {
          const response = await axios.post('http://127.0.0.1:5000/Addemployee', {
            Age: age,
            BusinessTravel: businessTravel,
            DailyRate: dailyRate,
            Department: department,
            DistanceFromHome: distanceFromHome,
            Education: education,
            EducationField: educationField,
            EmployeeNumber: employeeNumber,

            EnvironmentSatisfaction: environmentSatisfaction,
            Gender: gender,
            HourlyRate: hourlyRate,
            JobInvolvement: jobInvolvement,
            JobLevel: jobLevel,
            JobRole: jobRole,
            JobSatisfaction: jobSatisfaction,
            MaritalStatus: maritalStatus,
            MonthlyIncome: monthlyIncome,
            MonthlyRate: monthlyRate,
            NumCompaniesWorked: numCompaniesWorked,
            Over18: over18,
            OverTime: overTime,
            PercentSalaryHike: percentSalaryHike,
            PerformanceRating: performanceRating,
            RelationshipSatisfaction: relationshipSatisfaction,
            StandardHours: standardHours,
            StockOptionLevel: stockOptionLevel,
            TotalWorkingYears: totalWorkingYears,
            TrainingTimesLastYear: trainingTimesLastYear,
            WorkLifeBalance: workLifeBalance,
            YearsAtCompany: yearsAtCompany,
            YearsInCurrentRole: yearsInCurrentRole,
            YearsSinceLastPromotion: yearsSinceLastPromotion,
            YearsWithCurrManager:yearsWithCurrManager,

              
          });
   console.log("add res",response.data.result)
   setresultattr(response.data.result)
          // Handle the response according to your needs
          if (response.status === 200) {
            console.log('Employee successfully registered');
            setSnackbarMessage('Employee successfully registered');
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            if (response.data.result == "Yes") {
              navigate('/NegativeAttrition')
             }
             if (response.data.result == "No") {
              navigate('/PositiveAttrition')
        
             }
          } else {
            console.log('Employee failed');
            setSnackbarMessage('Employee registration failed');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
          }
        } catch (error) {
          console.error(error);
          setSnackbarMessage('An error occurred while adding the employee');
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
        }
        }
    
    
    
      const getAllemployee = async () => {
        try {
          const response = await axios.get('http://localhost:8000/allemployees');
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
    },[])

    useEffect(() => {
      console.log('asdasd')
      getAlldepartments()
  },[])



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
        <h3 className="text-center mt-2 mb-2 h3head">{value.JobRole}</h3>
        <hr className='color-black'/>
</div>
        <span className="text-center inline mt-2">Department: {value.Department}</span>
        <span className="text-center inline mt-2">Age: {value.Age}</span>
        <span className="text-center inline mt-2">Gender: {value.Gender}</span>
        <span className="text-center inline mt-2">Working Hours: {value.StandardHours}</span> 
        <span className="text-center inline mt-2">Years in the Company: {value.YearsAtCompany}</span>

        <div className="flex mt-4 space-x-3 md:mt-6 justify-center">

       

<button onMouseEnter={()=> {setAge(value.Age); setBusinessTravel(value.BusinessTravel); setDailyRate(value.DailyRate); setDepartment(value.Department); setDistanceFromHome(value.DistanceFromHome); setEducation(value.Education); setEducationField(value.EducationField); setEmployeeCount(value.EmployeeCount); setEmployeeNumber(value.EmployeeNumber); setEnvironmentSatisfaction(value.EnvironmentSatisfaction); setGender(value.Gender); setHourlyRate(value.HourlyRate); setJobInvolvement(value.JobInvolvement); setJobLevel(value.JobLevel); setJobRole(value.JobRole); setJobSatisfaction(value.JobSatisfaction); setMaritalStatus(value.MaritalStatus); setMonthlyIncome(value.MonthlyIncome); setMonthlyRate(value.MonthlyRate); setNumCompaniesWorked(value.NumCompaniesWorked); setOver18(value.Over18); setOverTime(value.OverTime); setPercentSalaryHike(value.PercentSalaryHike); setPerformanceRating(value.PerformanceRating); setRelationshipSatisfaction(value.RelationshipSatisfaction); setStandardHours(value.StandardHours); setStockOptionLevel(value.StockOptionLevel); setTotalWorkingYears(value.TotalWorkingYears); setTrainingTimesLastYear(value.TrainingTimesLastYear); setWorkLifeBalance(value.WorkLifeBalance); setYearsAtCompany(value.YearsAtCompany); setYearsInCurrentRole(value.YearsInCurrentRole); setYearsSinceLastPromotion(value.YearsSinceLastPromotion); setYearsWithCurrManager(value.YearsWithCurrManager); }}
      onClick={() => {
         attritionemloyee();
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