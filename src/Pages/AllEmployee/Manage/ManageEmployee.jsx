import { useContext, useEffect } from 'react';
import { Link, json, useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../../Ccomponents/Footer/Footer';
import DashNavbar from '../../../Ccomponents/Header/DashboardNavbar/DashNavbar';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';



const Manageemployee = () => {
    const navigate = useNavigate();
    const [allemployees, setallemployees] = useState([]);
    const [employeeBoolean, setemployeeBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    const [vacationleave, setvacationleave] = useState(false);
    const [sickleave, setsickleave] = useState(false);
    const [personalleave, setpersonalleave] = useState(false);
    const [latearrivals, setlatearrivals] = useState(false);
    const [lateleaving, setlateleaving] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [singeemloyee  , setsingeemloyee] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [value, setvalue] = useState();
    const {id} = useParams();

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
        width: '1100px', // Adjust the width as needed
      };

      const handleSnackbarClose = () => {
        setOpenSnackbar(false);
      };
    

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
      const getAllemployee = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/employeedetails/${id}`);
          console.log("response: ", response);
          console.log(allemployees);
          setallemployees(response.data.data);
        } catch (error) {
          console.log("error in getting all Departments", error);
        }
      };

      const handlesubmit = async (id) => {
        try {
            const UserData = { ...singeemloyee};
        const response = await axios.put(`http://localhost:8000/editemployee/${id}`, UserData);
        setOpenSnackbar(true);
          } catch (error) {
            console.log("error in editing all employee", error);
            setOpenDialog(false)
                   }

                   setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
      //window.location.reload(false);
    }, 3000);
  
    }


    useEffect(() => {
        console.log('asdasd')
fetchSingleCustomer()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , employeeBoolean ])
    
    return (
        <>
        <DashNavbar/>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} >
        <DialogTitle>Manage Leaves and Arrivals</DialogTitle>
        <DialogContent>
        <div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6" style={{
    marginTop: '5vh'
  }} >
    <div className="relative z-0 w-full mb-6 group" >
<h3>Vacation Leaves</h3>
   </div>
    <div className="relative z-0 w-full mb-6 group">
    <Box sx={{ width: 250 }}>
      <Slider onChange={handlecchange}
        aria-label="Temperature"
        defaultValue={3}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={12}
        // id="vacationleave"
  name="vacationleave"
      />
    </Box>  
    
     </div>
  </div>
  <Divider />

  <div className="grid md:grid-cols-2 md:gap-6" style={{
    marginTop: '5vh'
  }}>
    <div className="relative z-0 w-full mb-6 group">
<h3>Sick Leaves</h3>
   </div>
    <div className="relative z-0 w-full mb-6 group">
    <Box sx={{ width: 250 }}>
      <Slider onChange={handlecchange}
        aria-label="Temperature"
        defaultValue={3}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={8}
        name="sickleave"
      />
    </Box>  
    
     </div>
  </div>
  <Divider />

  <div className="grid md:grid-cols-2 md:gap-6" style={{
    marginTop: '5vh'
  }}>
    <div className="relative z-0 w-full mb-6 group">
<h3>Perosnal Leaves</h3>
   </div>
    <div className="relative z-0 w-full mb-6 group">
    <Box sx={{ width: 250 }}>
      <Slider onChange={handlecchange}
        aria-label="Temperature"
        defaultValue={3}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        name="personalleave"
      />
    </Box>  
    
     </div>
  </div>
  <Divider />

  <div className="grid md:grid-cols-2 md:gap-6" style={{
    marginTop: '5vh' 
  }}>
    <div className="relative z-0 w-full mb-6 group">
<h3>Late Arrivals</h3>
   </div>
    <div className="relative z-0 w-full mb-6 group">
    <Box sx={{ width: 250 }}>
      <Slider onChange={handlecchange}
        aria-label="Temperature"
        defaultValue={3}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={30}
        name="latearrivals"
      />
    </Box>  
    
     </div>
  </div>
  <Divider />

  <div className="grid md:grid-cols-2 md:gap-6" style={{
    marginTop: '5vh'
  }}>
    <div className="relative z-0 w-full mb-6 group">
<h3>Over Time</h3>
   </div>
    <div className="relative z-0 w-full mb-6 group">
    <Box sx={{ width: 250 }}>
      <Slider onChange={handlecchange}
        aria-label="Temperature"
        defaultValue={3}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={45}
        name="lateleaving"
      />
    </Box>  
    
     </div>
  </div>
  
</div>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={()=> {handlesubmit(singeemloyee._id)}}>Save</Button>
        </DialogActions>
      </Dialog>

            <div className='rootcontainer2' style={{ backgroundColor: 'white' }}>
                <h2 className="heado">{singeemloyee.emloyeename}</h2>
            </div>

            <Button
  variant="contained"
  onClick={() => { setOpenDialog(true); }}
  style={{
    display: 'block',
    margin: 'auto',
    marginTop: '5vh',
    transform: 'translateY(-50%)',
  }}
>
  Manage Leaves and Arrivals
</Button>


    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
            <th scope="col" className="px-6 py-3">
                    
                    </th>
            <th scope="col" className="px-6 py-3">
                    S#
                    </th>
                <th scope="col" className="px-6 py-3">
                    Leaves Information
                </th>
                <th scope="col" className="px-6 py-3">
                    Data
                </th>
            </tr>
        </thead>
        <tbody>

        <tr className="bg-white border-b">
        <th scope="col" className="px-6 py-3">
                    
                    </th>
        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            1.
        </td>
        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            Vacation Leaves
        </td>
        <td className="px-6 py-4">
        {singeemloyee.vacationleave}
        </td>

        </tr>

        <tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    2.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    Sick Leaves
</th>
<td className="px-6 py-4">
{singeemloyee.sickleave}
</td>

</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    3.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Personal Leaves
</th>
<td className="px-6 py-4">
{singeemloyee.personalleave}
</td>
</tr>

        {/* <tr className="bg-white border-b">
        <th scope="col" className="px-6 py-3">
                    
                    </th>
        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            2.
        </td>
        <td scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
            Name
        </td>
        <td className="px-6 py-4">
        {singeemloyee.employeename}
        </td>

        </tr> */}

        
           
        </tbody>

        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
            <th scope="col" className="px-6 py-3">
                    
                    </th>
            <th scope="col" className="px-6 py-3">
                    S#
                    </th>
                <th scope="col" className="px-6 py-3">
                    Arrival Information
                </th>
                <th scope="col" className="px-6 py-3">
                    Data
                </th>
            </tr>
        </thead>

        <tbody>

{/* <tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    1.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Age
</th>
<td className="px-6 py-4">
{singeemloyee.age}
</td>

</tr> */}

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    1.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Late Arrivals
</th>
<td className="px-6 py-4">
{singeemloyee.latearrivals}
</td>
</tr>

<tr className="bg-white border-b">
<th scope="col" className="px-6 py-3">
                    
                    </th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
    2.
</th>
<th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
Over Time
</th>
<td className="px-6 py-4">
{singeemloyee.lateleaving}
</td>
</tr>




</tbody>
    </table>
</div>

<Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setOpenSnackbar(false)}
          severity="success" 
        >
         Employee Information Saved!
        </MuiAlert>
      </Snackbar>

<div className='rootcontainer2' style={{ backgroundColor: 'white' }}>
            <Link to="/AllEmployee" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                        Get Back to All Employees
                    </Button>
                </Link>
            </div>

            <Footer/>
        </>
    );
}

export default Manageemployee;