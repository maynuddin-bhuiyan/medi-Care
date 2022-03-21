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

                <Grid xs={3} sm={12} md={3} className='Contact'>
                    <Typography>
                        <div className="Logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="Number">
                            <LocalPhoneIcon sx={{ color: '#f98506' }} />
                            <p>(432)2072229 Call Us</p>


                        </div>

                        <div className="Mail">
                            <MailOutlineIcon sx={{ color: '#f98506' }} />
                            <p>hello@gmail.com Email Us</p>

                        </div>



                    </Typography>
                </Grid>

                <Grid  xs={3} sm={12} md={3} className='Pages'>
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

                <Grid  xs={3} sm={12} md={3} className='Account'>
                    <h4>Account</h4>
                    <Typography >
                        <ul>

                            <Link to="login"><li>Login</li></Link>
                            <Link to="registration"><li>Signup</li></Link>


                            <li>How it works</li>

                        </ul>


                    </Typography>
                </Grid>

                <Grid  xs={3} sm={12} md={3} className='HelpCenter'>
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



            <div className="OutBack">
                <p>copyright maynuddin 2022</p>
            </div>

        </div>
    );
};

export default Footer;