import { useState, useEffect } from "react";

const useData = () => {
    //State Declare
    const [properties, setProperties] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('https://fierce-hamlet-51364.herokuapp.com/properties')
            .then(res => res.json())
            .then(data => setProperties(data))
    },
        []);

    return [properties, setProperties]
}

export default useData;