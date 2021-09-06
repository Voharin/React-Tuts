import React, { useEffect, useState } from 'react';
import ClimbinBoxLoader from 'react-spinners/ClimbingBoxLoader';

const Spinner = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);


    return ( <div className = "spinner" >

        
           

        </div>
    )
}

export default Spinner