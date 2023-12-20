import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import LinearProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../Ccomponents/Footer/Footer';
import './department.css';
import DashNavbar from '../../Ccomponents/Header/DashboardNavbar/DashNavbar';

const Department = () => {
    const navigate = useNavigate();
    const [departmentname, setdepartmentname] = useState("");
    const [alldepartmentss, setalldepartmentss] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [departmentBoolean, setdepartmentBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    const [contact, setEmail] = React.useState('');
    const [departmentmanager, setdeptman] = React.useState('');
    const [description, setdeptdes] = React.useState('');
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [SingleDepartment, setSingleDepartment] = useState([]);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [active, setactive] = useState(false);
    const [inactive, setinactive] = useState(false);
    const [editbool, seteditbool] = useState(false);
    const [adddepbool, setadddepbool] = useState(false);



    const fetchSingleDepartment = async(id) => {
        const response = await axios.get(`http://localhost:8000/geteditdepaprtment/${id}`);
        console.log("response: ", response);
      console.log(SingleDepartment);
      setSingleDepartment(response.data.Product);
            }

    const handlecchange = (ev) => {
        const {value, name} = ev.target;
        setSingleDepartment(()=> {
            return {
                ...SingleDepartment, [name]: value
            }
        })

 
    };

  

    const handleOpenAlert = (message) => {
      setAlertMessage(message);
      setOpenAlert(true);
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
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'start',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginTop: '15px',
        width: '500px', 
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    

    
      const handleDialogOpen = () => {
        setOpenDialog(true);
      };
    
      const handleDialogClose = () => {
        setOpenDialog(false);
      };
      const deleteData = async (id, name)=>{
        try {
          const response = await axios.get(`http://localhost:8000/deletedepartment/${id}/${name}`)
          console.log("response: ", response.data);
        } catch (error) {
          console.log("error in deleting department", error);
        }
        handleOpenAlert('Department Inactivated');
        setinactive(true)
        setactive(false)
        //window.location.reload(false);
      };
      const approveData = async (id, name)=>{
        try {
          const response = await axios.get(`http://localhost:8000/activedepartment/${id}/${name}`)
          console.log("response: ", response.data);
        } catch (error) {
          console.log("error in active department", error);
        }
        handleOpenAlert('Department Activated');
        setactive(true)
        setinactive(false)
       // window.location.reload(false);
      };
      const handleSubscribe = () => {
        
        console.log('Department Name:', departmentname);
        console.log('Email/Contact:', contact);
        console.log('Department Manager  :', departmentmanager);
        console.log('Department Description  :', description);
    
        handleDialogClose();
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

    const AddDepartment = async () => {
      if (departmentname && contact && departmentmanager) {

          try {
            setLoading(true);
            
            const response = await axios.post('http://localhost:8000/adddepartments', {
                departmentname,
                contact,
                departmentmanager,
                description
                
            });
    
          
            if (response.status === 201) {
              console.log('Signup successful');
              handleOpenAlert('Department successfully added!');
              setadddepbool(true)
              setOpenDialog(false);

                        } else {
              console.log('Department addition failed');
            }
          } catch (error) {
            console.error(error);
          }
          finally {
            setLoading(false); // Hide loader after operation completes
          }
        }
        else {alert("fill all fields")}
          
    
      };

     // Function to handle opening the dialog for editing
    const handleEditDialogOpen = () => {
      setOpenEditDialog(true);
  };
  // Function to handle closing the edit dialog
  const handleEditDialogClose = () => {
    setOpenEditDialog(false);
};
 const handleEdit = async (id) => {
        const UserData = { ...SingleDepartment};
        const response = await axios.put(`http://localhost:8000/editdepartment/${id}`, UserData);
        seteditbool(true)
        handleOpenAlert('Department successfully Editted!');
        setOpenEditDialog(false);


    }
    

    useEffect(() => {
        console.log('asdasd')
        getAlldepartments()
        seteditbool(false)
        setinactive(false)
        setactive(false)
        setadddepbool(false)
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [active , inactive, editbool, adddepbool ])
    
    return (
        <>
        <DashNavbar/>

        <div className='rootcontainer2' style={{ backgroundColor: 'white'  }} >
                <h2 className="heado">Departments</h2>
                <Divider sx={{ margin: '10px 0', backgroundColor: 'black' }} />
            </div>
            <div className='flex  justify-evenly flex-wrap my-4' ></div>



        {/* <div className='rootcontainer'>
                <h2>Add Department</h2>
                <TextField fullWidth value={departmentname}  onChange={(event) => { setdepartmentname(event.target.value); }} name="departmentname" label="department Name" variant="outlined" />
        <Button fullWidth onClick={AddDepartment} variant="contained">Add Department</Button>
            </div> */}
            {/* Material-UI Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}  >
        <DialogTitle>Add Department</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Department Name'
              type='text'
              fullWidth
              value={departmentname}
              onChange={(event) => setdepartmentname(event.target.value)}
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Email/Contact'
              type='text'
              fullWidth
              value={contact}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Department Manager'
              type='text'
              fullWidth
              value={departmentmanager}
              onChange={(event) => setdeptman(event.target.value)}
            />
            <TextField
              autoFocus
              margin='dense'
              id='name'
              label='Department Description'
              type='text'
              fullWidth
              value={description}
              onChange={(event) => setdeptdes(event.target.value)}
            />
            
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color='primary'>
            Cancel
          </Button>
          <div style={{ position: 'relative' }}>
        <Button
          onClick={AddDepartment}
          color="primary"
          disabled={loading}
        >
          {loading && (
            <LinearProgress size={24} sx={{ position: 'absolute', top: '50%', left: '50%', marginTop: '-12px', marginLeft: '-12px' }} />
          )}
          Add
        </Button>
      </div>
        </DialogActions>
      </Dialog>

      <Dialog open={openEditDialog} onClose={handleEditDialogClose}  >
        <DialogTitle>Edit Department</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              autoFocus
              margin='dense'
              id='departmentname'
              label='Department Name'
              name='departmentname'
              type='text'
              fullWidth
              value={SingleDepartment.departmentname} onChange={handlecchange} 
            />
            <TextField
              autoFocus
              margin='dense'
              id='contact'
              label='Email/Contact'
              type='text'
                            name='contact'
              fullWidth
              value={SingleDepartment.contact} onChange={handlecchange} 
            />
            <TextField
              autoFocus
              margin='dense'
              id='departmentmanager'
              label='Department Manager'
              type='text'
              name='departmentmanager'
              fullWidth
              value={SingleDepartment.departmentmanager} onChange={handlecchange} 
            />
            <TextField
              autoFocus
              margin='dense'
              id='description'
              label='Department Description'
              type='text'
              name='description'
              fullWidth
              value={SingleDepartment.description} onChange={handlecchange} 
            />
            
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={() => {handleEdit(SingleDepartment._id)}}
          // onClick={AddDepartment} 
          color='primary'>
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  paddingTop: '20px'
}}>
  <Button
    variant='outlined'
    onClick={handleDialogOpen}
    sx={{
      color: 'rgb(236, 116, 12)',
      backgroundColor: 'Black', 
      fontWeight: 'bold',
      padding: '8px 16px',
      borderRadius: '8px',
      cursor: 'pointer',
      '&:hover': {
        color: 'Black',
        backgroundColor: 'rgb(236, 116, 12)',
      },
     
    }}
  >
    Add Department
  </Button>
</div>
            {/* <div className='rootcontainer2' style={{ backgroundColor: 'white' }} >
                <h2 className="heado">Departments</h2>
            </div> */}
            <div className='flex  justify-evenly flex-wrap my-4' >

               {alldepartmentss.map((value) => (

      <div style={containerStyle}>
        <h1 className="headoo">{value.departmentname}</h1>
        <p className="headoos">{value.departmentmanager}</p>
        <p className="headoos">{value.contact}</p>
        {value.executive == "0" && (<><p className="headoos text-red-500 font-bold">Status: Inactive</p></>)}

        <div className="flex mt-4 space-x-3 md:mt-6 justify-center">
        {value.executive == "0" ? (<>
        </>): (<>
                <a onClick={()=>{navigate(`/departmentEmployee/${value.departmentname}`, { replace: true }) }} className="inline-flex items-center bg-black text-yellow-500 px-4 py-2 text-sm font-medium text-center text-white  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">View</a> 

        </>)}
        {/* <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Edit</a>  */}
{/* Edit Button */}
<a
                                onClick={() => {
                                    // Open the edit dialog on clicking "Edit"
                                    handleEditDialogOpen(); fetchSingleDepartment(value._id)
                                }}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" >
                                Edit
                            </a>
       <button onClick={()=>{approveData(value._id, value.departmentname)}}className="inline-flex bg-black text-green-500 items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">Active</button>
       <button onClick={()=>{deleteData(value._id, value.departmentname)}} className="inline-flex bg-black text-red-500 items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 ">InActive</button>

        </div>

      </div>
               ))}
               </div>

               {/* Material-UI Snackbar for alerts */}
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={() => setOpenAlert(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setOpenAlert(false)}
          severity="success"
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>

      <div className='rootcontainer2' style={{ backgroundColor: 'white' }}>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                        Your Dashboard
                    </Button>
                </Link>
            </div>
                
    </>
        
    );
}

export default Department;