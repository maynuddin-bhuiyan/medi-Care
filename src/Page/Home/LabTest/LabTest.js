import React from 'react';
import { Button, Grid } from '@mui/material';
import LandlordsImage from '../../../images/LabTest/LabTest.jpg';
import ShapeShadow from '../../../images/LabTest/Polygon 20.png';
import './LabTest.css';

const LabTest = () => {
    return (
        <div id='labTest' className='Container MarginButtom'>

            <div className="LabTest">
            <h1>Lab Test</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>

            </div>


            <Grid container spacing={2}>
        <Grid item xs={6} md={6}>

        <div className="LabTestImage">
            <img src={LandlordsImage} alt="" />
            <div className="LabTestsShadow">
            <img src={ShapeShadow} alt="" />
        </div>
            </div>
       
        </Grid>
        <Grid item xs={6} md={6}>
            
          <div className="LabTestText">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</p>
              <Button className='Button'>Lab Test</Button>
              </div>
          
        </Grid>

        

        </Grid>
        </div>


    );
};

export default LabTest;