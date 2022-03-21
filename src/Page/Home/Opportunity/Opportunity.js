import React from 'react';
import { Button, Grid } from '@mui/material';
import TenantsImage from '../../../images/Opportunity/Opportunity.jpg';
import TenantsShadow from '../../../images/Opportunity/Polygon 21.png';
import './Opportunity.css';

const Opportunity = () => {
    return (
        <div id='dreams' className='Container MarginButtom'>
            <div className="Opportunity">
            <h1>Dreams Opportunity </h1>
            <p>We are proud to have the opportunity to give you the smile of your dreams.</p>

            </div>


            <Grid container spacing={2}>
        <Grid item xs={6} md={6}>

        <div className="OpportunityText">
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo</p>
              <Button className='Button'>More Opportunity</Button>
              </div>
       
        </Grid>
        <Grid item xs={6} md={6}>
        <div className="OpportunityImage">
            <img src={TenantsImage} alt="" />
            <div className="OpportunityShadow">
            <img src={TenantsShadow} alt="" />
        </div>
            </div>
            
          
          
        </Grid>

        

        </Grid>




        </div>
    );
};

export default Opportunity;