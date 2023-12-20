import TextField from '@mui/material/TextField';
import React, { useState, useEffect } from 'react';
import { useNavigate , useParams} from 'react-router';
import axios from 'axios'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Leaveform = () => {
  const navigate = useNavigate();

    const [value, setvalue] = useState();

   
      

    return (
        <>
        <div className='mx-10 my-6 '>
        <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
<h3>Annual Leaves</h3>
   </div>
    <div className="relative z-0 w-full mb-6 group">
    <Box sx={{ width: 300 }}>
      <Slider onChange={(event) => { setvalue(event.target.value); }}
        aria-label="Temperature"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>  
    {value}
     </div>
  </div>
</div>

        </>
    )
};
export default Leaveform;