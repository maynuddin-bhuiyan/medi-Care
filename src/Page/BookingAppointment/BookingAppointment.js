import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Button, TextField, } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Modal from '@mui/material/Modal';
import './BookingAppointment.css';
import useAuth from '../Hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: "10px",


  boxShadow: 24,
  p: 4,
};

const BookingAppointment = ({ appointmentOpen, handleClose }) => {
  const [value, setValue] = React.useState(null);

  const { user } = useAuth();



  const initualInfo = { user: user?.name, number: '', email: "", subject: "", time: "" };

  const [Logindata, setLogindata] = useState(initualInfo);



  const onBlure = blure => {
    const field = blure.target.name;
    const value = blure.target.value;
    const newLogindata = { ...Logindata };
    newLogindata[field] = value;
    console.log(newLogindata);
    setLogindata(newLogindata)
  };


  const hendalSubmit = () => {

    const appointment = {
      ...Logindata,

    }
    console.log(appointment);





    if (appointment.number && appointment.user && appointment.subject == "") {
      alert('Wrong')
    }

    else if (appointment.number && appointment.user && appointment.subject !== "") {

      fetch('https://fierce-hamlet-51364.herokuapp.com/appointment', {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(appointment)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert('Thank you appointment successfull done.')
        })

    }




  }


  return (
    <div className='BookingAppointment'>
      <Modal
        open={appointmentOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            type="text"
            sx={{ marginBottom: "10px", marginRight: '20px' }}
            className="InputText"
            name='user'
            onBlur={onBlure}



          />
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            type="number"
            name='number'
            onBlur={onBlure}
            sx={{ marginBottom: "10px" }}

          />
          <TextField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            type="email"
            name='email'
            onBlur={onBlure}
            sx={{ marginBottom: "10px" }}



          />
          <TextField
            id="standard-basic"
            label="Time"
            variant="standard"
            type='time'
            name='time'
            onBlur={onBlure}
            sx={{ marginLeft: "20px" }}



          />


          <TextField
            id="standard-basic"
            label="Subject"
            variant="standard"
            type="text"
            sx={{ marginBottom: "30px", marginLeft: '0px' }}
            className="InputText"
            name='subject'
            onBlur={onBlure}



          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select date in your range "
              value={value}

              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField

                {...params} />}
            />
          </LocalizationProvider>

          <Button onClick={hendalSubmit} sx={{ margin: "0px 0px 0px 10px !important" }} className='Button'>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BookingAppointment;