import React from 'react';
import PeopleImage1 from '../../../images/People/Image 3.png';
import PeopleImage2 from '../../../images/People/Image 4.png';
import PeopleImage3 from '../../../images/People/Image 5.png';
import PeopleImage4 from '../../../images/People/Image 6.png';
import './People.css';


const People = () => {
    return (
        <div className='Container MarginButtom'>

            <div className="People">

                <div className="PeopleText">
                    <div className="TexBox">
                        <h5>What Patient say about us. Read more</h5>
                    </div>
                </div>

                <div className='PeoplePhoto' >

                    <div className="PeopleImage"><img src={PeopleImage1} alt="" /></div>
                    <div className="PeopleImage"><img src={PeopleImage2} alt="" /></div>
                    <div className="PeopleImage"><img src={PeopleImage3} alt="" /></div>
                    <div className="PeopleImage"><img src={PeopleImage4} alt="" /></div>


                </div>

            </div>


        </div>
    );
};

export default People;