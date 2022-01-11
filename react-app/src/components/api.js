
import{useEffect, useState} from 'react';
import spaceX from './spaceX'

const SpaceX = () => {
    let [spaceX, setSpaceX] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(value => setSpaceX(value))
    }, [])
    return (
        <div className='api'>
            {spaceX.map(value => <SpaceX mission_name={value.mission_name} launch_year={value.launch_year} mission_patch_small={value.mission_patch_small}/>)}
        </div>
    );
};

export default SpaceX