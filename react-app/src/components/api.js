import React, {useEffect, useState} from 'react';
import Spacex from "./spaceX";

const Space = () => {
    let [spaceX, setSpaceX] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(spaceX => {
            let not_tztz = spaceX.filter(spaceX => spaceX.launch_year !== '2020');
            setSpaceX(not_tztz);
            })

        

    }, [])
    return (
        <div className='api'>
            {spaceX.map((value, index) => <Spacex key={(index)}  mission_name={value.mission_name} launch_year={value.launch_year} mission_patch_small={value.links.mission_patch_small}/>)}
        </div>
    );
};

export default Space