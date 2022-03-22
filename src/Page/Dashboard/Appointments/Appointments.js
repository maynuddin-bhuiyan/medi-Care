import { Typography } from '@mui/material';
import React from 'react';
import './Appointments.css';

const Appointments = (props) => {

    console.log(props.appointments);

    return (
        <div className="Appointments">
            <Typography sx={{display: "inline-block", margin: '10px', fontWeight: '600'}} variant="h6" component="div" gutterBottom>
                    {props.appointments.email}
             </Typography>
             <Typography sx={{display: "inline-block", margin: '10px', textTransform: "capitalize" , fontWeight: '600'}} variant="h6" component="div" gutterBottom>
                    {props.appointments.user}
             </Typography>
             <Typography sx={{display: "inline-block", margin: '10px', textTransform: "capitalize" , fontWeight: '600'}} variant="h6" component="div" gutterBottom>
                    {props.appointments.subject}
             </Typography>
             <Typography sx={{display: "inline-block", margin: '10px', textTransform: "capitalize", fontWeight: '600'}} variant="h6" component="div" gutterBottom>
                    {props.appointments.number}
             </Typography>
             <Typography sx={{display: "inline-block", margin: '10px', textTransform: "capitalize", fontWeight: '600'}} variant="h6" component="div" gutterBottom>
                    {props.appointments.time}
             </Typography>
        </div>
        
            
    );
};

export default Appointments;