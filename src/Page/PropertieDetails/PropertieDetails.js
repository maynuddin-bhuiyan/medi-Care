import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './PropertieDetails.css';

const PropertieDetails = () => {

  const { id } = useParams();

  const [propertieDetails, setPropertieDetails] = useState([]);
  const [detailsItam, setDetailsItam] = useState([]);


  useEffect(() => {

    fetch('https://fierce-hamlet-51364.herokuapp.com/properties')
      .then(res => res.json())
      .then(data => {
        setPropertieDetails(data.products);
      });
  }, []);









  useEffect(() => {
    if (propertieDetails.length > 0) {
      const matchItam = propertieDetails.find(cameraDetails => cameraDetails.id == id)
      setDetailsItam(matchItam);
    }

  }, [propertieDetails])



  console.log(detailsItam);

  const { img, name, price, reviews, Warranty, Certification, } = detailsItam;

  return (
    <div className='DetailsItam'>

      <Link className='NewIcon' to='/'>
        <ArrowBackIosIcon /> Medicare
      </Link>
      <h1 className='Container'>Details</h1>

      <div className="Container">


        <div className="Details">
          <div className="DetailsImg">
            <img src={detailsItam.img} alt="" />

          </div>
          <div className="DetailsText">
            <h2>Reviews {reviews}</h2>
            <h3>Name : {name}</h3>
            <h3>Warranty: {Warranty}</h3>
            <h3>Categories: {detailsItam.Categories}</h3>
            <h3>Certification: {Certification}</h3>
            <h3>Price : {price}</h3>


          </div>



        </div>


        <div className="Description">

          <h1>Description</h1>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.Soluta ullam pariatur, autem dolorum nemo excepturi voluptatibus in nesciunt molestias tempore amet voluptate nihil error cupiditate doloribus provident? Dolorum, adipisci quasi.





          </p>
        </div>


      </div>

    </div>
  );
};

export default PropertieDetails;