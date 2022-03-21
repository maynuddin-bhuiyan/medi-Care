import React from 'react';
import { Button, Grid } from '@mui/material';
import image from '../../../images/banner/slides.png';
import imageShape from '../../../images/banner/Subtraction 1.png';
import outimage from '../../../images/banner/Group 6.png';

import './Banner.css';
import { HashLink } from 'react-router-hash-link';

const Banner = () => {
    return (
        <div className='Container MarginButtom' >
        
            
<Grid container spacing={2} >
  <Grid item xs={6} md={6}>
   
   <div className="TextBox">
       <h1>Be Hear Healthy
       Lorem Ipsum</h1>
<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos</p>


<HashLink className='ItamBottom' to="#appointment">
<Button className='Button'>Book Appointment</Button>
</HashLink>


<HashLink className='ItamBottom' to="#medicine">
<strong className='ButtomBorder'>Medicine</strong>
</HashLink>

        
   </div>

  </Grid>
  <Grid item xs={6} md={6}>

  <div className="Shadow">
        <div className="ShadowOne"></div>
        <div className="ShadowTwo"></div>
        <div className="ShadowThree"></div>
        <div className="ShadowFour"></div>
        <div className="ShadowFive"></div>
   </div>

   <div className="Image">
       <div className="imagephoto">
           <img src={image} alt="" />
       </div>
       <div className="imageShadow">
           <img src={imageShape} alt="" />
           <div className="imageText">
           <h6>We are Achieve the Success of Heart Surgery</h6>
           <p>Scroll down to find out why </p>
           </div>

           
       </div>

       <div className="outImages">
           <img src={outimage} alt="" />
       </div>
   </div>

   

  </Grid>


  <div className="OutShadow">

      <div className="ShadowPosition">

      <div className="Shadow"></div>
      <div className="Text">
          <h6>10+ Years
Services</h6>
      </div>
      
      </div>

      

  </div>
  
</Grid>

       
        </div>
    );
};

export default Banner;