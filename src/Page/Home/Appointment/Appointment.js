import React from 'react';
import { Button, TextField, } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import './Appointment.css';

const Appointment = () => {

    const [value, setValue] = React.useState(null);

    return (
        <div id='appointment' className='Container MarginButtom'>
            <div className="Appointment">

            <div className="AppointmentText">
                <div className="TexBox">
                    <h5>Make An Appointment</h5>
                </div>

                <div className="InputField">
                <TextField 
                id="standard-basic"
                label="Name" 
                variant="standard"
                type="text"
                sx={{marginBottom: "10px", marginRight: '20px'}}
                className="InputText"
                
                
                
                />
                <TextField 
                id="standard-basic" 
                label="Phone" 
                variant="standard"
                type="number"
                sx={{marginBottom: "10px"}}
                
                />
                <TextField 
                id="standard-basic" 
                label="E-mail" 
                variant="standard"
                type="email"
                sx={{marginBottom: "50px"}}

                
                
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Select date in your range "
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>


                    </div>     

                    <Button sx={{width: '100%', height: "60px", marginTop: '100px !important'}} className='Button'>Appointment</Button>           
            </div>

            

        </div>

        </div>
    );
};

export default Appointment;