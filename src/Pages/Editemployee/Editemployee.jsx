import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import '../Addemployee/addemployee.css';
import axios from 'axios';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../Ccomponents/Footer/Footer';
import DashNavbar from '../../Ccomponents/Header/DashboardNavbar/DashNavbar';
import { useParams} from 'react-router';

const Editemployee = () => {
  
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

    const [alldepartmentss, setalldepartmentss] = useState([]);
    const [departmentBoolean, setdepartmentBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    
    
    const [ageerror, setageerror] = useState();
    const [nameError, setnameError] = useState();
    const [businessTravelerror, setBusinessTravelerror] = useState();
    const [dailyRateerror, setDailyRateerror] = useState();
    const [departmenterror, setDepartmenterror] = useState();
    const [distanceFromHomeerror, setDistanceFromHomeerror] = useState();
    const [educationerror, seteducationerror] = useState();
    const [educationFielderror, seteducationFielderror] = useState();
    const [employeeNumbererror, setEmployeeNumbererror] = useState();
    const [environmentSatisfactionerror, setenvironmentSatisfactionerror] = useState();
    const [hourlyRateerror, setHourlyRateerror] = useState();
    const [jobInvolvementerror, setJobInvolvementerror] = useState();
    const [jobLevelerror, setJobLevelerror] = useState();
    const [jobRoleerror, setJobRoleerror] = useState();
    const [jobSatisfactionerror, setJobSatisfactionerror] = useState();
    const [monthlyIncomeerror, setMonthlyIncomeerror] = useState();
    const [monthlyRateerror, setMonthlyRateerror] = useState();
    const [numCompaniesWorkederror, setNumCompaniesWorkederror] = useState();
    const [percentSalaryHikeerror, setPercentSalaryHikeerror] = useState();
    const [performanceRatingerror, setPerformanceRatingerror] = useState();
    const [relationshipSatisfactionerror, setRelationshipSatisfactionerror] = useState();
    const [standardHourserror, setStandardHourserror] = useState();
    const [stockOptionLevelerror, setStockOptionLevelerror] = useState();
    const [totalWorkingYearserror, setTotalWorkingYearserror] = useState();
    const [trainingTimesLastYearerror, setTrainingTimesLastYearerror] = useState();
    const [workLifeBalanceerror, setWorkLifeBalanceerror] = useState();
    const [yearsAtCompanyerror, setYearsAtCompanyerror] = useState();
    const [yearsInCurrentRoleerror, setYearsInCurrentRoleerror] = useState();
    const [yearsSinceLastPromotionerror, setYearsSinceLastPromotionerror] = useState();
    const [yearsWithCurrManagererror, setYearsWithCurrManagererror] = useState();
    
    const [gendererror, setgendererror] = useState("");
    const [over18error, setover18error] = useState("");
    const [overTimeerror, setOverTimeerror] = useState("");
    const [maritalStatuserror, setMaritalStatuserror] = useState("");

    // Snackbar state variables
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    //emp add variable
    const [responce  , setResponce] = useState("");
    const [CreatedbyUser  , setCreatedbyUser] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
    const [singeemloyee  , setsingeemloyee] = useState("");
    const { id } = useParams();
    const fetchSingleCustomer = async() => {
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

      const handlesubmit = async () => {
        try {
            const UserData = { ...singeemloyee};
        const response = await axios.put(`http://localhost:8000/editemployee/${id}`, UserData);
        alert("employee Updated");
          } catch (error) {
            console.log("error in editing all employee", error);
            navigate("/allEmployee")
          }

    }
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
              setCreatedbyUser(responce.email);
              console.log("res",responce.email);
                            console.log("xx",CreatedbyUser);


          } catch (error) {
            console.log("axios error: ", error);
      
      
          }
      
        }
        getProfile();
      
      }, [])
    
     useEffect(() => {
        console.log('asdasd')
        getAlldepartments()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , departmentBoolean ])
    useEffect (()=> {
        fetchSingleCustomer()

    },[]);

    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };
    
    return (
        <>
        <DashNavbar/>
            {/* Edit Button */}
      <Button variant="contained" onClick={() => setOpenDialog(true)}>
        Edit Employee
      </Button>

      {/* Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          {/* Fields */}
          <TextField
            fullWidth
            value={singeemloyee.emloyeename || ''}
            onChange={handlecchange}
            name="emloyeename"
            placeholder="Employee Name"
            variant="outlined"
            sx={{ marginBottom: '1rem' }}
          />
          {nameError && <p className="error-message">{nameError}</p>} 
          <TextField fullWidth value={singeemloyee.age} onChange={handlecchange} type = "number" name="age" placeholder="Age" variant="outlined" sx={{ marginBottom: '1rem', width: '150px' }}/>
                {ageerror && <p className="error-message">{ageerror}</p>}
                <select id="businessTravel" onChange={handlecchange} name='businessTravel' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   " sx={{ marginBottom: '1rem' }}>
        <option sx={{ marginBottom: '1rem' }}>Select an option</option>
        <option value="Travel_Frequently" >Travel_Frequently</option>
        <option value="Travel_Rarely">Travel_Rarely</option>
</select>
                {businessTravelerror && <p className="error-message">{businessTravelerror}</p>} 
                <TextField fullWidth value={singeemloyee.dailyRate} onChange={handlecchange} type = "number" name="dailyRate" placeholder="Daily Rate ($)" variant="outlined" sx={{ marginBottom: '1rem' , marginTop: '1rem' }} />
                {dailyRateerror && <p className="error-message">{dailyRateerror}</p>} 

                <select id="department" name='department' onChange={handlecchange} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   " sx={{ marginBottom: '1rem' }}>
                <option>Enter Department</option>

                {alldepartmentss.map((value) => (
                            <option value={value.departmentname} >{value.departmentname}</option>

                ))}
                </select>
                {/*<TextField fullWidth value={department} onChange={handleInputChange} name="department" placeholder="Department" variant="outlined" />
                */}
                                {departmenterror && <p className="error-message">{departmenterror}</p>} 
                <TextField fullWidth value={singeemloyee.distanceFromHome}onChange={handlecchange} type = "number" name="distanceFromHome" placeholder="Distance From Home (KM)" variant="outlined" sx={{ marginBottom: '1rem' , marginTop: '1rem' }} />
                {distanceFromHomeerror && <p className="error-message">{distanceFromHomeerror}</p>} 
                <TextField fullWidth value={singeemloyee.education} onChange={handlecchange} type = "number" name="education" placeholder="Education" variant="outlined" sx={{ marginBottom: '1rem' }} />
                {educationerror && <p className="error-message">{educationerror}</p>} 
                <TextField fullWidth value={singeemloyee.educationField} onChange={handlecchange} name="educationField" placeholder="Education Field" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {educationFielderror && <p className="error-message">{educationFielderror}</p>}
                <TextField fullWidth value={singeemloyee.employeeNumber}  onChange={handlecchange} type = "number" name="employeeNumber" placeholder="Employee Number" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {employeeNumbererror && <p className="error-message">{employeeNumbererror}</p>}
                <TextField fullWidth value={singeemloyee.environmentSatisfaction} onChange={handlecchange} type = "number" name="environmentSatisfaction" placeholder="Environment Satisfaction" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {environmentSatisfactionerror && <p className="error-message">{environmentSatisfactionerror}</p>}
                <select id="gender" onChange={handlecchange} name='gender' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   "sx={{ marginBottom: '1rem' }}>
        <option>Select Gender</option>
        <option value="Male" >Male</option>
        <option value="Female">Female</option>
</select>
{gendererror && <p className="error-message">{gendererror}</p>}

                <TextField fullWidth value={singeemloyee.hourlyRate} onChange={handlecchange} type = "number" name="hourlyRate" placeholder="Hourly Rate ($)" variant="outlined" sx={{ marginBottom: '1rem' , marginTop: '1rem'}}/>
                {hourlyRateerror && <p className="error-message">{hourlyRateerror}</p>}
                <TextField fullWidth value={singeemloyee.jobInvolvement} onChange={handlecchange} type = "number" name="jobInvolvement" placeholder="Job Involvement" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {jobInvolvementerror && <p className="error-message">{jobInvolvementerror}</p>}
                <TextField fullWidth value={singeemloyee.jobLevel} onChange={handlecchange} type = "number" name="jobLevel" placeholder="Job Level" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {jobLevelerror && <p className="error-message">{jobLevelerror}</p>}
                <TextField fullWidth value={singeemloyee.jobRole} onChange={handlecchange} name="jobRole" placeholder="Job Role" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {jobRoleerror && <p className="error-message">{jobRoleerror}</p>}
                <TextField fullWidth value={singeemloyee.jobSatisfaction} onChange={handlecchange} type = "number" name="jobSatisfaction" placeholder="Job Satisfaction" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {jobSatisfactionerror && <p className="error-message">{jobSatisfactionerror}</p>}
                <select id="maritalStatus" name='maritalStatus'onChange={handlecchange} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   "sx={{ marginBottom: '1rem' }}>
        <option>Enter Marital Status</option>
        <option value="Single" >Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
</select>
{maritalStatuserror && <p className="error-message">{maritalStatuserror}</p>}

                <TextField fullWidth value={singeemloyee.monthlyIncome} onChange={handlecchange} type = "number" name="monthlyIncome" placeholder="Monthly Income" variant="outlined" sx={{ marginBottom: '1rem' , marginTop: '1rem' }} />
                {monthlyIncomeerror && <p className="error-message">{monthlyIncomeerror}</p>}
                <TextField fullWidth value={singeemloyee.monthlyRate} onChange={handlecchange} type = "number" name="monthlyRate" placeholder="Monthly Rate" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {monthlyRateerror && <p className="error-message">{monthlyRateerror}</p>}
                <TextField fullWidth value={singeemloyee.numCompaniesWorked} onChange={handlecchange} type = "number" name="numCompaniesWorked" placeholder="Num Companies Worked" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {numCompaniesWorkederror && <p className="error-message">{numCompaniesWorkederror}</p>}
                <select id="over18" name='over18' onChange={handlecchange} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   "sx={{ marginBottom: '1rem' }}>
        <option>Over 18</option>
        <option value="Yes" >Yes</option>
        <option value="No">No</option>
</select>
{over18error && <p className="error-message">{over18error}</p>}

<select
  id="overTime"
  name="overTime"
  onChange={handlecchange}
  className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  style={{ marginBottom: '1rem' , marginTop: '1rem' }} // Applying margin bottom using inline style
>
  <option>Over Time</option>
  <option value="Yes">Yes</option>
  <option value="No">No</option>
</select>
                {overTimeerror && <p className="error-message">{overTimeerror}</p>}

                <TextField fullWidth value={singeemloyee.percentSalaryHike} onChange={handlecchange} type = "number" name="percentSalaryHike" placeholder="Percent Salary Hike" variant="outlined" sx={{ marginBottom: '1rem' , marginTop: '1rem' }} />
                {percentSalaryHikeerror && <p className="error-message">{percentSalaryHikeerror}</p>}
                <TextField fullWidth value={singeemloyee.performanceRating} onChange={handlecchange} type = "number" name="performanceRating" placeholder="Performance Rating" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {performanceRatingerror && <p className="error-message">{performanceRatingerror}</p>}
                <TextField fullWidth value={singeemloyee.relationshipSatisfaction} onChange={handlecchange} type = "number" name="relationshipSatisfaction" placeholder="Relationship Satisfaction" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {relationshipSatisfactionerror && <p className="error-message">{relationshipSatisfactionerror}</p>}
                <TextField fullWidth value={singeemloyee.standardHours} onChange={handlecchange} type = "number" name="standardHours" placeholder="Standard Hours" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {standardHourserror && <p className="error-message">{standardHourserror}</p>}
                <TextField fullWidth value={singeemloyee.stockOptionLevel} onChange={handlecchange} type = "number" name="stockOptionLevel" placeholder="Stock Option Level" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                
                {stockOptionLevelerror && <p className="error-message">{stockOptionLevelerror}</p>}
                <TextField fullWidth value={singeemloyee.totalWorkingYears} onChange={handlecchange} type = "number" name="totalWorkingYears" placeholder="Total Working Years" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {totalWorkingYearserror && <p className="error-message">{totalWorkingYearserror}</p>}
                <TextField fullWidth value={singeemloyee.trainingTimesLastYear} onChange={handlecchange} type = "number" name="trainingTimesLastYear" placeholder="Training Times Last Year" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {trainingTimesLastYearerror && <p className="error-message">{trainingTimesLastYearerror}</p>}
                <TextField fullWidth value={singeemloyee.workLifeBalance} onChange={handlecchange} type = "number" name="workLifeBalance" placeholder="Work Life Balance" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {workLifeBalanceerror && <p className="error-message">{workLifeBalanceerror}</p>}
                <TextField fullWidth value={singeemloyee.yearsAtCompany} onChange={handlecchange} type = "number" name="yearsAtCompany" placeholder="Years at Company" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {yearsAtCompanyerror && <p className="error-message">{yearsAtCompanyerror}</p>}
                <TextField fullWidth value={singeemloyee.yearsInCurrentRole} onChange={handlecchange} type = "number" name="yearsInCurrentRole" placeholder="Years in Current Role" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {yearsInCurrentRoleerror && <p className="error-message">{yearsInCurrentRoleerror}</p>}
                <TextField fullWidth value={singeemloyee.yearsSinceLastPromotion} onChange={handlecchange} type = "number" name="yearsSinceLastPromotion" placeholder="Years Since Last Promotion" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {yearsSinceLastPromotionerror && <p className="error-message">{yearsSinceLastPromotionerror}</p>}
                <TextField fullWidth value={singeemloyee.yearsWithCurrManager} onChange={handlecchange} type = "number" name="yearsWithCurrManager" placeholder="Years with Current Manager" variant="outlined" sx={{ marginBottom: '1rem' }}/>
                {yearsWithCurrManagererror && <p className="error-message">{yearsWithCurrManagererror}</p>}

          {/* Other fields similarly */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handlesubmit}>Save</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert onClose={handleCloseSnackbar} severity="success" elevation={6} variant="filled">
          Employee updated successfully!
        </MuiAlert>
      </Snackbar>
          


 <Footer/>
        </>
    );
}

export default Editemployee;
