import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './Help.css';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Help = () => {


    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className='Container'>
            <Link className='BackIcon DefultColor' to='/'>
            <ArrowBackIosNewIcon sx={{color: "#F98506"}}  />  <span className='DefultColor'>MediCare</span>
</Link>
            <h1>Help</h1>

            <h2>FAQs</h2>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >

                    <Typography sx={{ color: 'text.secondary' }}>Do I have to agree to the Revisions to the LINE Corporation Privacy Policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="Panel1">
                            <p>The LINE Privacy Policy has been revised in accordance with the amended Japanese Act on the Protection of Personal Information, which is scheduled to go into effect in April 2022.</p>
                            <p>To continue using LINE in the future, you will need to agree to the Revisions to the LINE Corporation Privacy Policy.</p>
                            <p>For details about what revisions were made, please see <Link to="/privacyPolicy" >this page.</Link> </p>

                            <div className="helpful">
                                <h5>
                                    <strong>Was this article helpful?</strong>

                                </h5>
                                <ThumbUpAltIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />
                                <ThumbDownIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />




                            </div>

                        </div>
                    </Typography>
                </AccordionDetails>

            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >

                    <Typography sx={{ color: 'text.secondary' }}>
                        Checking/changing your password
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        <p>Unfortunately, there is no way to directly check your registered password.</p>
                        <p>If you forgot your password, follow the steps below to change it.<br />
                            <strong> Note:</strong>   Be sure to write your new password down so you don't forget it.</p>
                        <p>ap the <strong> Home</strong>  tab <ArrowBackIosNewIcon /> <strong> Settings</strong> <ArrowBackIosNewIcon />  <strong> Account</strong>.<br />
                            2. Tap Password. <br />
                            Note: If you're asked to unlock the screen, use the unlock method you have configured on your device,<br /> such as your passcode,<br /> PIN code, or biometric identification (e.g. fingerprint, face). Do not use the password registered to your LINE account.<br />
                            3. Enter your new password twice, then tap Change password.</p>

                        <div className="helpful">
                            <h5>
                                <strong>Was this article helpful?</strong>

                            </h5>
                            <ThumbUpAltIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />
                            <ThumbDownIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />




                        </div>
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >

                    <Typography >
                        Registering an email address
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Registering an email address to your LINE account makes it possible for you to reset your password in the case that you forget it. </p>
                        <p>To register an email address: <br />
                            1. Go to the Home tab <ArrowBackIosNewIcon /> Settings <ArrowBackIosNewIcon /> Account <ArrowBackIosNewIcon /> Email address.<br />
                            2. Enter an email address, then tap Next.<br />
                            3. Enter the verification code or tap the URL in the email that was sent to you.</p>
                        <p>Tap <Link to="/registration">here</Link> to open the Account screen from your smartphone.</p>


                        <div className="helpful">
                            <h5>
                                <strong>Was this article helpful?</strong>

                            </h5>
                            <ThumbUpAltIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />
                            <ThumbDownIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />




                        </div>
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    About Call me instead
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>Selecting Call me instead on the phone number verification code input screen lets you verify your phone number by receiving an automated phone call.</p>
                        <p>To use the Call me instead option:<br />
                            1. Tap Call me instead at the bottom of the verification code input screen.<br />
                            2. Tap OK.<br />
                            3. After receiving the automated phone call, enter the verification code you were given.<br />
                            Note: The call may be from an overseas phone number.</p>




                        <div className="helpful">
                            <h5>
                                <strong>Was this article helpful?</strong>

                            </h5>
                            <ThumbUpAltIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />
                            <ThumbDownIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />




                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    Creating a new account
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>

                        <p>You need a device that can receive text messages or phone calls to create a new LINE account.</p>


                        <p>To create a new account:<br />
                            1. Open LINE and tap Sign up.<br />
                            2. Confirm the Terms and Conditions of Use and Privacy Policy, then enter your phone number and tap the arrow.<br />
                            3. Enter the verification code you received via text message.<br />
                            Note:
                            - On some devices, the verification code is entered automatically. In this case, please skip to step
                            <br /> 4.
                            - If you see a message that says "Welcome back, XXXX!" after entering the verification code, tap No, that's not me.<br />
                            4. Tap No, create a new account.<br />
                            5. Enter a name, set a profile photo, and tap the arrow.<br />
                            6. Create a password and tap the arrow.<br />
                            7. Choose whether to add friends from your device's contacts,<br /> then tap the arrow.</p>


                        <p>If you see someone else's name after verifying your phone number, see <Link to="/registration">this</Link> </p>



                        <div className="helpful">
                            <h5>
                                <strong>Was this article helpful?</strong>

                            </h5>
                            <ThumbUpAltIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />
                            <ThumbDownIcon sx={{ color: '#1d37a3', fontSize: '50px', margin: '20px', cursor: 'pointer' }} />




                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Help;