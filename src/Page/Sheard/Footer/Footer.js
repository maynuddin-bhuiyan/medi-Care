import React from 'react';
import { Grid, Typography } from '@mui/material';
import logo from '../../../images/logo/logo.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from 'react-router-dom';


import './Footer.css';
import { HashLink } from 'react-router-hash-link';




const Footer = () => {
    return (
        <div className='Footer' >

<Grid className='Container FooterText'>

<Grid className='Contact'>
    <Typography>   
        <div className="Logo">
            <img src={logo} alt="" />
        </div>
        <div className="Number">
            <LocalPhoneIcon />
            <p>(432)2072229 Call Us</p>


        </div>

        <div className="Mail">
            <MailOutlineIcon />
            <p>hello@queerhomes.com Email Us</p>

        </div>



    </Typography>
</Grid>

<Grid className='Pages'>
        <h4>Pages</h4>
    <Typography>

        <ul>
            <HashLink to="#about"><li>About us</li></HashLink>
            <HashLink to="#labTest"><li>Lab Test</li></HashLink>
            <HashLink to="#dreams"><li>Dreams Opportunity</li></HashLink>    
            <Link to="/privacyPolicy"> <li>Privacy Policy</li></Link>
        </ul>


    </Typography>
</Grid>

<Grid className='Account'>
<h4>Account</h4>
    <Typography >
    <ul>

        <Link to="login"><li>Login</li></Link>
        <Link to="registration"><li>Signup</li></Link>
            
            
            <li>How it works</li>
            
        </ul>


    </Typography>
</Grid>

<Grid className='HelpCenter'>
<h4>Help Center</h4>
    <Typography >

    <ul>
            <li><Link to='/privacyPolicy'>Publish Property</Link> </li>
            <li><Link to='/help'>Help</Link></li>
            <li>Contact Us</li>
            
        </ul>

    </Typography>
</Grid>





</Grid>
            
        </div>
    );
};

export default Footer;