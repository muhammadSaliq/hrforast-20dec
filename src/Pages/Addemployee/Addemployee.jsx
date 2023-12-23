import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './addemployee.css';
import axios from 'axios';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../Ccomponents/Footer/Footer';
import DashNavbar from '../../Ccomponents/Header/DashboardNavbar/DashNavbar';
const ageRegex = /^[0-9]+$/;
const dailyRateRegex=/^[0-9]+$/;
const numericRegex = /^[0-9]+$/;
const alphabetRegex = /^[a-zA-Z]+$/;  
const Addemployee = () => {
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
    
//result
const [resultattr , setresultattr] = useState(false);

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


    const Addemployeedata = async () => {
      setCreatedbyUser(responce.email)
      console.log("cre",CreatedbyUser)
if (emloyeename && age && businessTravel && dailyRate && department && distanceFromHome && education <= 5 && educationField && employeeNumber &&
    environmentSatisfaction <=4 && gender && hourlyRate && jobInvolvement <=4 && jobLevel <=5 && jobRole && jobSatisfaction <=4 && maritalStatus &&
    monthlyIncome && monthlyRate && numCompaniesWorked && over18 && overTime && percentSalaryHike && performanceRating <=4 &&
    relationshipSatisfaction <=4 && standardHours && stockOptionLevel <=3 && totalWorkingYears && trainingTimesLastYear <=6 && workLifeBalance <=4 &&
    yearsAtCompany && yearsSinceLastPromotion && yearsWithCurrManager && CreatedbyUser
    ) {

          try {
            const response = await axios.post('http://localhost:8000/addemployee', {
                emloyeename,
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
                CreatedbyUser
                
            });


            // Handle the response according to your needs
            if (response.status === 201) {
              console.log('Employee successfully registered');
              setSnackbarMessage('Employee successfully registered');
              setSnackbarSeverity('success');
              setOpenSnackbar(true);

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
        else {
          setSnackbarMessage('Kindly fill all fields');
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
            
        if (!emloyeename) {
            setnameError("Please enter name");
            //setPasswordError(!password);
            //setReTypePasswordError(!reTypepassword);
            return;
          }
        //  if (!age) {
        //       setageerror("please enter age");
        //       return;
        //     }
        if (!age || !ageRegex.test(age.toString()) || age < 18 || age > 100 || age.toString().includes('e')) {
          if (!age) {
            setageerror("Please Enter Your Age in Integer");
          } else if (!ageRegex.test(age.toString())) {
            setageerror("Please enter a valid age (numeric value)");
          } else if (age < 18 || age > 100) {
            setageerror("Age should be between 18 and 100");
          } else if (age.toString().includes('e')) {
            setageerror("Age should not contain the letter 'e'");
          }
          return;
        }
            if (!businessTravel || businessTravel == "Select an option") {
                setBusinessTravel("");
                setBusinessTravelerror("please enter business travel");
                return;
              }
                          if (!department || department == "Enter Department") {
                setDepartment("");
                setDepartmenterror("please enter department");
                return;
              }


              // if (!dailyRate) {
              //   setDailyRateerror("please enter daily rate");
              //   return;
              // }

              if (!dailyRate || !dailyRateRegex.test(dailyRate.toString()) ||  dailyRate.toString().includes('e')) {
                if (!dailyRate) {
                  setDailyRateerror("Please enter daily rate");
                } else if (!dailyRateRegex.test(dailyRate.toString())) {
                  setDailyRateerror("Please enter a valid daily rate (numeric value)");
                } else if (dailyRate <= 0 || dailyRate > 5) {
                  setDailyRateerror("Daily rate should be greater than 0 and less than or equal to 5");
                } else if (dailyRate.toString().includes('e')) {
                  setDailyRateerror("Daily rate should not contain the letter 'e'");
                }
                return;
              }


            //            if (!distanceFromHome ) {
            //             setDistanceFromHomeerror("please enter distance ");
            //   return;
            // }

            if (!distanceFromHome || !numericRegex.test(distanceFromHome.toString()) || distanceFromHome.toString().includes('e')) {
              if (!distanceFromHome) {
                setDistanceFromHomeerror("Please enter distance");
              } else if (!numericRegex.test(distanceFromHome.toString())) {
                setDistanceFromHomeerror("Please enter a valid distance (numeric value)");
              } else if (distanceFromHome <= 0 || distanceFromHome > 5) {
                setDistanceFromHomeerror("Distance should be in 1-5 Range");
              } else if (distanceFromHome.toString().includes('e')) {
                setDistanceFromHomeerror("Distance should not contain the letter 'e'");
              }
              return;
            }

            // if (!education || education > 5) {
            //     seteducationerror("please enter eduation B/W 1 to 5");
            //     return;
            //   }
            if (!education || !numericRegex.test(education.toString()) || education <= 0 || education > 5 || education.toString().includes('e')) {
              if (!education) {
                seteducationerror("Please enter education");
              } else if (!numericRegex.test(education.toString())) {
                seteducationerror("Please enter a valid education level (numeric value)");
              } else if (education <= 0 || education > 5) {
                seteducationerror("Education level should be in 1-5 Range");
              } else if (education.toString().includes('e')) {
                seteducationerror("Education level should not contain the letter 'e'");
              }
              return;
            }

                            if (!educationField || educationField === "Enter Education Field") {
                              setEducationField("");
                                seteducationFielderror("Please enter Education Field");
                return;
              }
              // if (!educationField || !alphabetRegex.test(educationField) || educationField.length <= 0 || educationField.length > 4 || educationField.includes('e')) {
              //   if (!educationField) {
              //     seteducationFielderror("Please enter education field");
              //   } else if (!alphabetRegex.test(educationField)) {
              //     seteducationFielderror("Please enter a valid education field (alphabets only)");
              //   } else if (educationField.length <= 0 || educationField.length > 4) {
              //     seteducationFielderror("Education field length should be greater than 0 and less than or equal to 4");
              //   } else if (educationField.includes('e')) {
              //     seteducationFielderror("Education field should not contain the letter 'e'");
              //   }
              //   return;
              // }
//               if (!employeeNumber) {
//                 setEmployeeNumbererror("please enter employee number");
// return;
// }

if (!employeeNumber || !numericRegex.test(employeeNumber) || employeeNumber <= 0 || employeeNumber.length > 4 || employeeNumber.includes('e')) {
  if (!employeeNumber) {
    setEmployeeNumbererror("Please enter employee number");
  } else if (!numericRegex.test(employeeNumber)) {
    setEmployeeNumbererror("Please enter a valid employee number (numeric values only)");
  } else if (employeeNumber <= 0 || employeeNumber.length > 4) {
    setEmployeeNumbererror("Employee number should be greater than 0 and less than or equal to 4 digits");
  } else if (employeeNumber.includes('e')) {
    setEmployeeNumbererror("Employee number should not contain the letter 'e'");
  }
  return;
}
// if (!environmentSatisfaction  || environmentSatisfaction > 4) {
//     setenvironmentSatisfactionerror("please enter employee satisfaction B/W 1 to 4");
// return;
// }
if (!environmentSatisfaction || !numericRegex.test(environmentSatisfaction) || environmentSatisfaction <= 0 || environmentSatisfaction > 4 || environmentSatisfaction.includes('e')) {
  if (!environmentSatisfaction) {
    setenvironmentSatisfactionerror("Please enter environment satisfaction");
  } else if (!numericRegex.test(environmentSatisfaction)) {
    setenvironmentSatisfactionerror("Please enter a valid environment satisfaction (numeric values only)");
  } else if (environmentSatisfaction <= 0 || environmentSatisfaction > 4) {
    setenvironmentSatisfactionerror("Environment satisfaction should be greater than 0 and less than or equal to 4");
  } else if (environmentSatisfaction.includes('e')) {
    setenvironmentSatisfactionerror("Environment satisfaction should not contain the letter 'e'");
  }
  return;
}

if (!gender || gender == "Select Gender") {
  setGender("");
setgendererror("please select a gender");
return;
}
// if (!hourlyRate) {
//     setHourlyRateerror("please enter hourly rate");
// return;
// }
if (!environmentSatisfaction || !numericRegex.test(environmentSatisfaction) || environmentSatisfaction <= 0 || environmentSatisfaction > 4 || environmentSatisfaction.includes('e')) {
  if (!environmentSatisfaction) {
    setenvironmentSatisfactionerror("Please enter environment satisfaction");
  } else if (!numericRegex.test(environmentSatisfaction)) {
    setenvironmentSatisfactionerror("Please enter a valid environment satisfaction (numeric values only)");
  } else if (environmentSatisfaction <= 0 || environmentSatisfaction > 4) {
    setenvironmentSatisfactionerror("Environment satisfaction should be greater than 0 and less than or equal to 4");
  } else if (environmentSatisfaction.includes('e')) {
    setenvironmentSatisfactionerror("Environment satisfaction should not contain the letter 'e'");
  }
  return;
}

// if (!jobInvolvement || jobInvolvement > 4) {
//     setJobInvolvementerror("please enter job involvement B/W 1 to 4");
// return;
// }

if (!jobInvolvement || !numericRegex.test(jobInvolvement) || jobInvolvement <= 0 || jobInvolvement > 4 || jobInvolvement.includes('e')) {
  if (!jobInvolvement) {
    setJobInvolvementerror("Please enter job involvement");
  } else if (!numericRegex.test(jobInvolvement)) {
    setJobInvolvementerror("Please enter a valid job involvement (numeric values only)");
  } else if (jobInvolvement <= 0 || jobInvolvement > 4) {
    setJobInvolvementerror("Job involvement should be greater than 0 and less than or equal to 4");
  } else if (jobInvolvement.includes('e')) {
    setJobInvolvementerror("Job involvement should not contain the letter 'e'");
  }
  return;
}

if (!jobLevel || jobLevel > 5) {
    setJobLevelerror("please enter job involvement B/W 1 to 5");
return;
}
if (!jobRole || jobRole === "Enter Job Role") {
    setJobRole("")
    setJobRoleerror("Please enter Job role");
return;
}

// if (!maritalStatus || maritalStatus == "Enter Marital Status") {
//   setMaritalStatus("");
//   setMaritalStatuserror("please enter martial status");
//   return;
// }
// if (!jobSatisfaction || jobSatisfaction > 4) {
//     setJobSatisfactionerror("please enter job satisfation B/W 1 to 4");
// return;
// }

if (!jobSatisfaction || !numericRegex.test(jobSatisfaction) || jobSatisfaction <= 0 || jobSatisfaction > 4 || jobSatisfaction.includes('e')) {
  if (!jobSatisfaction) {
    setJobSatisfactionerror("Please enter job satisfaction");
  } else if (!numericRegex.test(jobSatisfaction)) {
    setJobSatisfactionerror("Please enter a valid job satisfaction (numeric values only)");
  } else if (jobSatisfaction <= 0 || jobSatisfaction > 4) {
    setJobSatisfactionerror("Job satisfaction should be greater than 0 and less than or equal to 4");
  } else if (jobSatisfaction.includes('e')) {
    setJobSatisfactionerror("Job satisfaction should not contain the letter 'e'");
  }
  return;
}


if (!maritalStatus || maritalStatus == "Enter Marital Status") {
  setMaritalStatus("");
  setMaritalStatuserror("please enter martial status");
  return;
}
if (!monthlyIncome) {
    setMonthlyIncomeerror("please enter monthly income");
return;
}


// if (!monthlyRate) {
//     setMonthlyRateerror("please enter monthly rate");
// return;
// }

if (!monthlyRate || isNaN(monthlyRate) ||  monthlyRate.toString().includes('e')) {
  if (!monthlyRate) {
    setMonthlyRateerror("Please enter monthly rate");
  } else if (isNaN(monthlyRate)) {
    setMonthlyRateerror("Please enter a valid monthly rate (numeric values only)");
  } else if (monthlyRate <= 0 || monthlyRate > 4) {
    setMonthlyRateerror("Monthly rate should be greater than 0 and less than or equal to 4");
  } else if (monthlyRate.toString().includes('e')) {
    setMonthlyRateerror("Monthly rate should not contain the letter 'e'");
  }
  return;
}

// if (!numCompaniesWorked) {
//     setNumCompaniesWorkederror("please enter total companies");
// return;
// }

if (!numCompaniesWorked || isNaN(numCompaniesWorked) ||  numCompaniesWorked.toString().includes('e')) {
  if (!numCompaniesWorked) {
    setNumCompaniesWorkederror("Please enter total companies");
  } else if (isNaN(numCompaniesWorked)) {
    setNumCompaniesWorkederror("Please enter a valid number for total companies (numeric values only)");
  } else if (numCompaniesWorked <= 0 || numCompaniesWorked > 4) {
    setNumCompaniesWorkederror("Total companies should be greater than 0 and less than or equal to 4");
  } else if (numCompaniesWorked.toString().includes('e')) {
    setNumCompaniesWorkederror("Total companies should not contain the letter 'e'");
  }
  return;
}

                          if (!over18 || over18 == "Over 18") {
                setOver18("");
                setover18error("please select an option");
                return;
              }
                          if (!overTime || overTime == "Over Time") {
                setOverTime("");
                setOverTimeerror("please select an option");
                return;
              }
// if (!percentSalaryHike) {
//     setPercentSalaryHikeerror("please enter salary hike");
// return;
// }


if (!percentSalaryHike || isNaN(percentSalaryHike) ||  percentSalaryHike.toString().includes('e')) {
  if (!percentSalaryHike) {
    setPercentSalaryHikeerror("Please enter salary hike");
  } else if (isNaN(percentSalaryHike)) {
    setPercentSalaryHikeerror("Please enter a valid number for salary hike (numeric values only)");
  } else if (percentSalaryHike <= 0 || percentSalaryHike > 4) {
    setPercentSalaryHikeerror("Salary hike should be greater than 0 and less than or equal to 4");
  } else if (percentSalaryHike.toString().includes('e')) {
    setPercentSalaryHikeerror("Salary hike should not contain the letter 'e'");
  }
  return;
}




// if (!performanceRating || performanceRating > 4) {
//     setPerformanceRatingerror("please enter performane rating B/W 1 to 4");
// return;
// }

if (!performanceRating || isNaN(performanceRating) || performanceRating <= 0 || performanceRating > 4 || performanceRating.toString().includes('e')) {
  if (!performanceRating) {
    setPerformanceRatingerror("Please enter performance rating");
  } else if (isNaN(performanceRating)) {
    setPerformanceRatingerror("Please enter a valid number for performance rating (numeric values only)");
  } else if (performanceRating <= 0 || performanceRating > 4) {
    setPerformanceRatingerror("Performance rating should be greater than 0 and less than or equal to 4");
  } else if (performanceRating.toString().includes('e')) {
    setPerformanceRatingerror("Performance rating should not contain the letter 'e'");
  }
  return;
}


// if (!relationshipSatisfaction || relationshipSatisfaction > 4) {
//     setRelationshipSatisfactionerror("please enter satisfaction B/W 1 to 4");
// return;
// }

if (!relationshipSatisfaction || isNaN(relationshipSatisfaction) || relationshipSatisfaction <= 0 || relationshipSatisfaction > 4 || relationshipSatisfaction.toString().includes('e')) {
  if (!relationshipSatisfaction) {
    setRelationshipSatisfactionerror("Please enter relationship satisfaction");
  } else if (isNaN(relationshipSatisfaction)) {
    setRelationshipSatisfactionerror("Please enter a valid number for relationship satisfaction (numeric values only)");
  } else if (relationshipSatisfaction <= 0 || relationshipSatisfaction > 4) {
    setRelationshipSatisfactionerror("Relationship satisfaction should be greater than 0 and less than or equal to 4");
  } else if (relationshipSatisfaction.toString().includes('e')) {
    setRelationshipSatisfactionerror("Relationship satisfaction should not contain the letter 'e'");
  }
  return;
}


// if (!stockOptionLevel || stockOptionLevel > 3) {
//     setStockOptionLevelerror("please enter stock option B/W 0 to 3");
// return;
// }


if (!stockOptionLevel || isNaN(stockOptionLevel) || stockOptionLevel < 0 || stockOptionLevel > 3 || stockOptionLevel.toString().includes('e')) {
  if (!stockOptionLevel) {
    setStockOptionLevelerror("Please enter stock option level");
  } else if (isNaN(stockOptionLevel)) {
    setStockOptionLevelerror("Please enter a valid number for stock option level (numeric values only)");
  } else if (stockOptionLevel < 0 || stockOptionLevel > 3) {
    setStockOptionLevelerror("Stock option level should be greater than or equal to 0 and less than or equal to 3");
  } else if (stockOptionLevel.toString().includes('e')) {
    setStockOptionLevelerror("Stock option level should not contain the letter 'e'");
  }
  return;
}

// if (!standardHours) {
//     setStandardHourserror("please enter standard hours");
// return;
// } 

if (!standardHours || isNaN(standardHours) ||  standardHours.toString().includes('e')) {
  if (!standardHours) {
    setStandardHourserror("Please enter standard hours");
  } else if (isNaN(standardHours)) {
    setStandardHourserror("Please enter a valid number for standard hours (numeric values only)");
  } else if (standardHours <= 0 || standardHours > 3) {
    setStandardHourserror("Standard hours should be greater than 0 and less than or equal to 3");
  } else if (standardHours.toString().includes('e')) {
    setStandardHourserror("Standard hours should not contain the letter 'e'");
  }
  return;
}


// if (!totalWorkingYears) {
//     setTotalWorkingYearserror("please enter working years");
// return;
// }


if (!totalWorkingYears || isNaN(totalWorkingYears) ||  totalWorkingYears.toString().includes('e')) {
  if (!totalWorkingYears) {
    setTotalWorkingYearserror("Please enter total working years");
  } else if (isNaN(totalWorkingYears)) {
    setTotalWorkingYearserror("Please enter a valid number for total working years (numeric values only)");
  } else if (totalWorkingYears <= 0 || totalWorkingYears > 6) {
    setTotalWorkingYearserror("Total working years should be greater than 0 and less than or equal to 6");
  } else if (totalWorkingYears.toString().includes('e')) {
    setTotalWorkingYearserror("Total working years should not contain the letter 'e'");
  }
  return;
}

// if (!trainingTimesLastYear || trainingTimesLastYear > 6) {
//     setTrainingTimesLastYearerror("please enter training times B/W 0 to 6");
// return;
// } 

if (!trainingTimesLastYear || isNaN(trainingTimesLastYear) || trainingTimesLastYear <= 0 || trainingTimesLastYear > 6 || trainingTimesLastYear.toString().includes('e')) {
  if (!trainingTimesLastYear) {
    setTrainingTimesLastYearerror("Please enter training times");
  } else if (isNaN(trainingTimesLastYear)) {
    setTrainingTimesLastYearerror("Please enter a valid number for training times (numeric values only)");
  } else if (trainingTimesLastYear <= 0 || trainingTimesLastYear > 6) {
    setTrainingTimesLastYearerror("Training times should be greater than 0 and less than or equal to 6");
  } else if (trainingTimesLastYear.toString().includes('e')) {
    setTrainingTimesLastYearerror("Training times should not contain the letter 'e'");
  }
  return;
}

// if (!workLifeBalance || workLifeBalance > 4) {
//     setWorkLifeBalanceerror("please enter work life balance  B/W 1 to 6");
// return;
// }

if (!workLifeBalance || isNaN(workLifeBalance) || workLifeBalance <= 0 || workLifeBalance > 4 || workLifeBalance.toString().includes('e')) {
  if (!workLifeBalance) {
    setWorkLifeBalanceerror("Please enter work life balance");
  } else if (isNaN(workLifeBalance)) {
    setWorkLifeBalanceerror("Please enter a valid number for work life balance (numeric values only)");
  } else if (workLifeBalance <= 0 || workLifeBalance > 4) {
    setWorkLifeBalanceerror("Work life balance should be greater than 0 and less than or equal to 4");
  } else if (workLifeBalance.toString().includes('e')) {
    setWorkLifeBalanceerror("Work life balance should not contain the letter 'e'");
  }
  return;
}

if (!yearsAtCompany) {
    setYearsAtCompanyerror("please enter years at company");
return;
}    

if (!yearsInCurrentRole) {
    setYearsInCurrentRoleerror("please enter years of role");
return;
}      
if (!yearsSinceLastPromotion) {
    setYearsSinceLastPromotionerror("please enter last promotion");
return;
}
if (!yearsWithCurrManager) {
    setYearsWithCurrManagererror("please enter years with manager");
return;
}   
        }
    
        
      };
      useEffect(() => {

        const getProfile = async () => {
          try {
            let response = await axios.get('http://localhost:8000/api/v1/profile',
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


    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };
    
    return (
        <>
<DashNavbar/>
<div className='mx-6 my-10 '>
<div className="grid md:grid-cols-5 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth value={emloyeename} onChange={(event) => { setemloyeename(event.target.value); setnameError("") }}  name="emloyeename"  label="Employee Name" variant="outlined" />
                {nameError && <p className="error-message">{nameError}</p>} 
                
    </div>

      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={age} onChange={(event) => { setAge(event.target.value); setageerror("") }} type = "number" name="age" label="Age" variant="outlined" />
                {ageerror && <p className="error-message">{ageerror}</p>} 
               {/*} <TextField fullWidth value={businessTravel} onChange={(event) => { setBusinessTravel(event.target.value); setBusinessTravelerror("") }} name="businessTravel" label="Business Travel" variant="outlined" />
                
    */}         </div>

        <div className="relative z-0 w-full mb-6 group">

        <select id="businessTravel" onChange={(event) => { setBusinessTravel(event.target.value); setBusinessTravelerror("") }} name='businessTravel' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select an option</option>
        <option value="Travel_Frequently" >Travel_Frequently</option>
        <option value="Travel_Rarely">Travel_Rarely</option>
</select>
{businessTravelerror && <p className="error-message">{businessTravelerror}</p>} 

        </div>
        <div className="relative z-0 w-full mb-6 group">
                <TextField fullWidth value={dailyRate} onChange={(event) => { setDailyRate(event.target.value); setDailyRateerror("") }} type = "number" name="dailyRate" label="Daily Rate ($)" variant="outlined" />
                {dailyRateerror && <p className="error-message">{dailyRateerror}</p>} 
                </div>
                
  <div className="relative z-0 w-full mb-6 group">

<select id="department" name='department' onChange={(event) => { setDepartment(event.target.value); setDepartmenterror("")}} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
<option>Select Department</option>

{alldepartmentss.map((value) => (
            <option value={value.departmentname} >{value.departmentname}</option>

))}
</select>
{departmenterror && <p className="error-message">{departmenterror}</p>}
</div>

</div>

  <div className="grid md:grid-cols-5 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth value={distanceFromHome} onChange={(event) => { setDistanceFromHome(event.target.value); setDistanceFromHomeerror("") }} type = "number" name="distanceFromHome" label="Distance From Home (KM)" variant="outlined" />
                {distanceFromHomeerror && <p className="error-message">{distanceFromHomeerror}</p>} 
               
    </div>
    <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth value={education} onChange={(event) => { setEducation(event.target.value); seteducationerror("") }} type = "number" name="education" label="Education" variant="outlined" />
                {educationerror && <p className="error-message">{educationerror}</p>} 
                
    </div>
    {/* <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth value={educationField} onChange={(event) => { setEducationField(event.target.value); seteducationFielderror("") }} name="educationField" label="Education Field" variant="outlined" />
                {educationFielderror && <p className="error-message">{educationFielderror}</p>}
                
    </div> */}

      <div className="relative z-0 w-full mb-6 group">
            <select id="educationField" name='educationField'onChange={(event) => { setEducationField(event.target.value); seteducationFielderror("") }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
              <option>Enter Education Field</option>
              <option value="Life Sciences" >Life Sciences</option>
              <option value="Medical">Medical</option>
              <option value="Marketing">Marketing</option>
              <option value="Technical Degree">Technical Degree</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Other">Other</option>
      </select>
      {educationFielderror && <p className="error-message">{educationFielderror}</p>}
        </div>

    <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth value={employeeNumber}  onChange={(event) => {setEmployeeNumber(event.target.value); setEmployeeNumbererror("") }} type = "number" name="employeeNumber" label="Employee Number" variant="outlined" />
                {employeeNumbererror && <p className="error-message">{employeeNumbererror}</p>}
                
    </div>
    <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth value={environmentSatisfaction} onChange={(event) => { setEnvironmentSatisfaction(event.target.value); setenvironmentSatisfactionerror("") }} type = "number" name="environmentSatisfaction" label="Environment Satisfaction" variant="outlined" />
                {environmentSatisfactionerror && <p className="error-message">{environmentSatisfactionerror}</p>}
                </div>
  </div>
  <div className="grid md:grid-cols-5 md:gap-6">
    
  
<div className="relative z-0 w-full mb-6 group">
<select id="gender" onChange={(event) => { setGender(event.target.value); setgendererror("") }} name='gender' className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Select Gender</option>
        <option value="Male" >Male</option>
        <option value="Female">Female</option>
</select>
{gendererror && <p className="error-message">{gendererror}</p>}

  </div>

  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth value={hourlyRate} onChange={(event) => { setHourlyRate(event.target.value); setHourlyRateerror("") }} type = "number" name="hourlyRate" label="Hourly Rate ($)" variant="outlined" />
                {hourlyRateerror && <p className="error-message">{hourlyRateerror}</p>}
                
  </div>

  <div className="relative z-0 w-full mb-6 group">
 
  <TextField fullWidth value={jobInvolvement} onChange={(event) => { setJobInvolvement(event.target.value); setJobInvolvementerror("") }} type = "number" name="jobInvolvement" label="Job Involvement" variant="outlined" />
                {jobInvolvementerror && <p className="error-message">{jobInvolvementerror}</p>}
                
  </div>


  <div className="relative z-0 w-full mb-6 group">
  <TextField fullWidth value={jobLevel} onChange={(event) => { setJobLevel(event.target.value); setJobLevelerror("") }} type = "number" name="jobLevel" label="Job Level" variant="outlined" />
                {jobLevelerror && <p className="error-message">{jobLevelerror}</p>}
                
 
   </div>
   <div className="relative z-0 w-full mb-6 group">

   {/* <TextField fullWidth value={jobRole} onChange={(event) => { setJobRole(event.target.value); setJobRoleerror("") }} name="jobRole" label="Job Role" variant="outlined" />
                {jobRoleerror && <p className="error-message">{jobRoleerror}</p>} */}

                <div className="relative z-0 w-full mb-6 group">
      <select id="jobRole" name='jobRole'onChange={(event) => { setJobRole(event.target.value); setJobRoleerror("") }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Enter Job Role</option>
        <option value="Sales Executive" >Sales Executive</option>
        <option value="Research Scientist">Research Scientist</option>
        <option value="Laboratory Technician">Laboratory Technician</option>
        <option value="Manufacturing Director" >Manufacturing Director</option>
        <option value="Healthcare Representative">Healthcare Representative</option>
        <option value="Manager">Manager</option>
        <option value="Sales Representative">Sales Representative</option>
        <option value="Research Director">Research Director</option>
        <option value="Human Resources">Human Resources</option>


</select>
{jobRoleerror && <p className="error-message">{jobRoleerror}</p>}
  </div>
                
   </div>
  </div>

  <div className="grid md:grid-cols-5 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth value={jobSatisfaction} onChange={(event) => { setJobSatisfaction(event.target.value); setJobSatisfactionerror("") }} type = "number" name="jobSatisfaction" label="Job Satisfaction" variant="outlined" />
                {jobSatisfactionerror && <p className="error-message">{jobSatisfactionerror}</p>}
                  </div>

      <div className="relative z-0 w-full mb-6 group">
      <select id="maritalStatus" name='maritalStatus'onChange={(event) => { setMaritalStatus(event.target.value); setMaritalStatuserror("") }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Enter Marital Status</option>
        <option value="Single" >Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
</select>
{maritalStatuserror && <p className="error-message">{maritalStatuserror}</p>}
  </div>

        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={monthlyIncome} onChange={(event) => { setMonthlyIncome(event.target.value); setMonthlyIncomeerror("") }} type = "number" name="monthlyIncome" label="Monthly Income" variant="outlined" />
                {monthlyIncomeerror && <p className="error-message">{monthlyIncomeerror}</p>}
                
        </div>
        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={monthlyRate} onChange={(event) => { setMonthlyRate(event.target.value); setMonthlyRateerror("") }} type = "number" name="monthlyRate" label="Monthly Rate" variant="outlined" />
                {monthlyRateerror && <p className="error-message">{monthlyRateerror}</p>}
                
        </div>
        
      <div className="relative z-0 w-full mb-6 group">

      <TextField fullWidth value={numCompaniesWorked} onChange={(event) => { setNumCompaniesWorked(event.target.value); setNumCompaniesWorkederror("") }} type = "number" name="numCompaniesWorked" label="Num Companies Worked" variant="outlined" />
                {numCompaniesWorkederror && <p className="error-message">{numCompaniesWorkederror}</p>}
                
        </div>

</div>

<div className="grid md:grid-cols-5 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <select id="over18" name='over18' onChange={(event) => { setOver18(event.target.value); setover18error("") }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Over 18</option>
        <option value="Yes" >Yes</option>
        <option value="No">No</option>
</select>
{over18error && <p className="error-message">{over18error}</p>}

    </div>

      <div className="relative z-0 w-full mb-6 group">
 
      <select id="overTime" name='overTime'onChange={(event) => { setOverTime(event.target.value); setOverTimeerror("") }} className=" border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 0   ">
        <option>Over Time</option>
        <option value="Yes" >Yes</option>
        <option value="No">No</option>
</select>
                {overTimeerror && <p className="error-message">{overTimeerror}</p>}




        </div>

        
      <div className="relative z-0 w-full mb-6 group">

      <TextField fullWidth value={percentSalaryHike} onChange={(event) => { setPercentSalaryHike(event.target.value); setPercentSalaryHikeerror("") }} type = "number" name="percentSalaryHike" label="Percent Salary Hike" variant="outlined" />
                {percentSalaryHikeerror && <p className="error-message">{percentSalaryHikeerror}</p>}

        </div>
        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={performanceRating} onChange={(event) => { setPerformanceRating(event.target.value); setPerformanceRatingerror("") }} type = "number" name="performanceRating" label="Performance Rating" variant="outlined" />
                {performanceRatingerror && <p className="error-message">{performanceRatingerror}</p>}

        </div>
        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={relationshipSatisfaction} onChange={(event) => { setRelationshipSatisfaction(event.target.value); setRelationshipSatisfactionerror("") }} type = "number" name="relationshipSatisfaction" label="Relationship Satisfaction" variant="outlined" />
                {relationshipSatisfactionerror && <p className="error-message">{relationshipSatisfactionerror}</p>}

  
        </div>

</div>



<div className="grid md:grid-cols-5 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth value={standardHours} onChange={(event) => { setStandardHours(event.target.value); setStandardHourserror("") }} type = "number" name="standardHours" label="Standard Hours" variant="outlined" />
                {standardHourserror && <p className="error-message">{standardHourserror}</p>}

    </div>

      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={stockOptionLevel} onChange={(event) => { setStockOptionLevel(event.target.value); setStockOptionLevelerror("") }} type = "number" name="stockOptionLevel" label="Stock Option Level" variant="outlined" />
                
                {stockOptionLevelerror && <p className="error-message">{stockOptionLevelerror}</p>}
 

        </div>

        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={totalWorkingYears} onChange={(event) => { setTotalWorkingYears(event.target.value); setTotalWorkingYearserror("") }} type = "number" name="totalWorkingYears" label="Total Working Years" variant="outlined" />
                {totalWorkingYearserror && <p className="error-message">{totalWorkingYearserror}</p>}


        </div>
        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={trainingTimesLastYear} onChange={(event) => { setTrainingTimesLastYear(event.target.value); setTrainingTimesLastYearerror("") }} type = "number" name="trainingTimesLastYear" label="Training Times Last Year" variant="outlined" />
                {trainingTimesLastYearerror && <p className="error-message">{trainingTimesLastYearerror}</p>}

        </div>
        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={workLifeBalance} onChange={(event) => { setWorkLifeBalance(event.target.value); setWorkLifeBalanceerror("") }} type = "number" name="workLifeBalance" label="Work Life Balance" variant="outlined" />
                {workLifeBalanceerror && <p className="error-message">{workLifeBalanceerror}</p>}

  
        </div>

</div>

<div className="grid md:grid-cols-5 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
    <TextField fullWidth value={yearsAtCompany} onChange={(event) => { setYearsAtCompany(event.target.value); setYearsAtCompanyerror("") }} type = "number" name="yearsAtCompany" label="Years at Company" variant="outlined" />
                {yearsAtCompanyerror && <p className="error-message">{yearsAtCompanyerror}</p>}

    </div>

      <div className="relative z-0 w-full mb-6 group">

      <TextField fullWidth value={yearsInCurrentRole} onChange={(event) => { setYearsInCurrentRole(event.target.value); setYearsInCurrentRoleerror("") }} type = "number" name="yearsInCurrentRole" label="Years in Current Role" variant="outlined" />
                {yearsInCurrentRoleerror && <p className="error-message">{yearsInCurrentRoleerror}</p>}
 

        </div>

        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={yearsSinceLastPromotion} onChange={(event) => { setYearsSinceLastPromotion(event.target.value); setYearsSinceLastPromotionerror("") }} type = "number" name="yearsSinceLastPromotion" label="Years Since Last Promotion" variant="outlined" />
                {yearsSinceLastPromotionerror && <p className="error-message">{yearsSinceLastPromotionerror}</p>}

        </div>
        
      <div className="relative z-0 w-full mb-6 group">
      <TextField fullWidth value={yearsWithCurrManager} onChange={(event) => { setYearsWithCurrManager(event.target.value); setYearsWithCurrManagererror("") }} type = "number" name="yearsWithCurrManager" label="Years with Current Manager" variant="outlined" />
                {yearsWithCurrManagererror && <p className="error-message">{yearsWithCurrManagererror}</p>}
        </div>
        

</div>


<Button fullWidth onMouseEnter={()=> {setCreatedbyUser(responce.email)}} onClick={() => {Addemployeedata();}} variant="contained">Add Employee</Button></div>
<Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
            <MuiAlert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            elevation={6}
            variant="filled"
            >
            {snackbarMessage}
            </MuiAlert>
            </Snackbar>
          

 <Footer/>

        </>
    );
}

export default Addemployee;