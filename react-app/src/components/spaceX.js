import React from 'react';

let Spacex = (props) => {
    let{mission_name, launch_year, mission_patch_small} = props;
    return (
        <div className='main'>
            <div>
                <h1>{mission_name}  </h1>
            <p>{launch_year}  </p>
            </div>
            <img src = {mission_patch_small} alt='img'/> 
        </div>
    );
    };
export default Spacex;