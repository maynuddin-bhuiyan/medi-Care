import React, { useEffect, useState } from 'react';
import Appointments from '../Appointments/Appointments';
import './Appointmentbook.css';

const Appointmentbook = () => {


    const [appointmentbook, setAppointmentbook] = useState([]);

    useEffect(() => {

        fetch('https://fierce-hamlet-51364.herokuapp.com/appointment')
            .then(res => res.json())
            .then(data => {
                setAppointmentbook(data);
            });
    }, []);


    console.log(appointmentbook);
    return (
        <div className='Appointmentbook'>
            {
                appointmentbook.map(appointmentbook => <Appointments

                    key={appointmentbook._id}
                    appointments={appointmentbook}

                />)
            }
        </div>
    );
};

export default Appointmentbook;
