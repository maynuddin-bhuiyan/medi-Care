import React from 'react';
import image01 from '../../../images/Customers/Path 12.png';
import image02 from '../../../images/Customers/Path 12.png';
import './Customers.css';
import customerImg from '../../../images/Customers/Screenshot_18.png';

const Customers = () => {
    return (
        <div className='Container MarginButtom'>
            <div className="Customer">

                <div className="image1">
                    <img src={image01} alt="" />
                </div>
                <div className="image2">
                    <img src={image02} alt="" />
                </div>
                <h5>TESTIMONIALS AND OPPINIONS</h5>
                <h1>What Our Customers Say</h1>

            </div>


            <div className="CustomerBanner">

                <img src={customerImg} alt="" />

            </div>






        </div>
    );
};

export default Customers;