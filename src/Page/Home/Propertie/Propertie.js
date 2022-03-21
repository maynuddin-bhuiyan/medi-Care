import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Propertie.css';

const Propertie = (props) => {

  const { id, name, img, price, reviews } = props.propertie;

  console.log(props.propertie);


  const navigate = useNavigate();
  function detailsPropertie() {
    navigate(`propertieDetails/${id}`);
  }














  return (
    <div className='PropertieItam' onClick={
      () => {
        detailsPropertie(id);
      }}>

      <div className="PropertieImage">

        <img src={img} alt="" />
      </div>

      <div className="PropertieText">

        <h3> {name}</h3>
        <h2>Reviews: {reviews}</h2>
        <p>{price} $</p>

        <Button className='Button' onClick={
          () => {
            detailsPropertie(id);
          }}>Read More</Button>
      </div>
    </div>
  );
};

export default Propertie;