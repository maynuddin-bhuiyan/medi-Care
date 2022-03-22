import React from 'react';
import { Button } from '@mui/material';
import BookingAppointment from '../../BookingAppointment/BookingAppointment';
import './Appointment.css';
import AppointmentPhoto from '../../../images/Appointment.png';


const Appointment = () => {



    const [appointmentOpen, setAppointmentOpen] = React.useState(false);
    const handleOpen = () => setAppointmentOpen(true);
    const handleClose = () => setAppointmentOpen(false);





    return (
        <>
            <div id='appointment' className='Container MarginButtom'>
                <div className="Appointment">

                    <div className="AppointmentText">
                        <div className="TexBox">
                            <h5>Make An Appointment</h5>
                        </div>

                        <div className="InputField">
                            <img src={AppointmentPhoto} alt="" />


                        </div>

                       

                        <Button onClick={handleOpen} sx={{ width: '100%', height: "60px", marginTop: '200px !important' }} className='Button'>Appointment</Button>
                       

                        
                    </div>



                </div>

            </div>
        

            <BookingAppointment
                handleClose={handleClose}
                appointmentOpen={appointmentOpen}

            />
            
            


        </>
    );
};

export default Appointment;