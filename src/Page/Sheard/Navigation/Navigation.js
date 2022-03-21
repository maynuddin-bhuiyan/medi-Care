import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../../../images/logo/logo.png';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';
import { Button } from '@mui/material';
import useAuth from '../../Hooks/useAuth';




const Navigation = () => {
    const [age, setAge] = React.useState('');

    const {user, logOutUser} = useAuth();

  const handleChange = (event) => {
    setAge(event.target.value);
  };


    return (
        <div className='Container'>
        <Box sx={{ flexGrow: 1, padding: '0px'}}>
      <AppBar sx={{backgroundColor: '#FFFFFF', boxShadow: 'none',  color: '#000000', position: 'relative', }} position="static">
        <Toolbar sx={{padding: '0px !important'}}>

            <Typography className='LogoImg'>
                <img src={logo} alt="" />
            </Typography>
          
            
          
          <Typography  className='ListItam'>
             <ul>
                 <li><h6>Home</h6></li>

                 <HashLink className='ItamBottom' to="#about"><li><h6>About</h6></li></HashLink>
            <HashLink className='ItamBottom' to="#labTest"><li><h6>LabTest</h6></li></HashLink>
            <HashLink className='ItamBottom' to="#dreams"><li><h6>Opportunity</h6></li></HashLink>

            {


user?.email ?
  <Button sx={{marginLeft: "20px", border: "none", backgroundColor: "#F98506", color: "#000000"}} className="Itam-login" variant="outlined" onClick={logOutUser}> LogOut</Button>

  :

  <li></li> 




}
            
                 
             </ul>
          </Typography>






<Paper className='Search'
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 350, height: "25px", overflow: "hidden", padding: '5px' }}
    >
      
      <Select sx={{ border: '2px solid #F98506', padding: '0px', marginLeft: '-8px' }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Doctor List</MenuItem>
          <MenuItem value={20}>Find a Doctor</MenuItem>
          <MenuItem value={30}>Family Medicine</MenuItem>
        </Select>
        
<InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search An Opportunities"
        inputProps={{ 'aria-label': 'search google maps' }}
      />



      <IconButton  >
        
      </IconButton>
      
      
      
      <IconButton  type="submit" sx={{  backgroundColor: '#FFFFFF', borderRadius: '0px', padding: '10px', marginRight: '-8px' }} aria-label="search">
      <SearchIcon />
      </IconButton>

    </Paper>

        </Toolbar>
      </AppBar>
    </Box>
    </div>
    );
};

export default Navigation;