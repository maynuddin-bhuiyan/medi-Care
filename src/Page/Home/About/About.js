import React from 'react';
import { Button, Grid } from '@mui/material';
import AboutImage from '../../../images/About/About.jpg';
import ShapeShadow from '../../../images/About/Polygon 1.png';

import './About.css';

const About = () => {
    return (
        <div id='about' className='Container MarginButtom'>
            <div className="About">
                <h5>Welcome To <span className='DefultColor'> Medi Care </span>  </h5>
            <h1>WHO WE ARE</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna </p>
            </div>

        <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <div className="AboutText">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
              <Button className='Button'>About</Button>
          </div>
        </Grid>
        <Grid item xs={6} md={6}>
            <div className="AboutImage">
            <img src={AboutImage} alt="" />
            <div className="AboutShadow">
            <img src={ShapeShadow} alt="" />
        </div>
            </div>

          
        </Grid>

        

        </Grid>
        

            
        </div> 
    );
};

export default About;