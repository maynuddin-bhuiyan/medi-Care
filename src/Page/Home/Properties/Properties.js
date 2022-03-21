import React, { useEffect, useState } from 'react';
import Propertie from '../Propertie/Propertie';
import './Properties.css';

const Properties = () => {



    const [properties, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);




    const size = 5;
    useEffect(() => {
        fetch(`https://fierce-hamlet-51364.herokuapp.com/properties?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber)
            });
    }, [page]);






    return (
        <div id='medicine' className='Container MarginButtom'>

            <div className="Properties">

                <h1>Some of our available and
                    Top Searched Specialties</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
            </div>

            <div className="Propertie">
                {
                    properties.map(properties => <Propertie

                        key={properties._id}
                        propertie={properties}

                    />)
                }
            </div>


            <div className="pagenation">

                {
                    [...Array(pageCount).keys()]
                        .map(number => <button
                            className={number === page ? 'selated' : ''}
                            key={number}
                            onClick={() => setPage(number)}
                        >{number}</button>)
                }

            </div>
        </div>
    );
};

export default Properties;