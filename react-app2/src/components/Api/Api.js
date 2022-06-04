import React, { useEffect, useState } from "react";

import SpaceX from "../SpaceX/SpaceX";

export const Space =()=>{
  let[spacex, setSpacex] = useState([]);

  useEffect(()=>{
    fetch('https://api.spacexdata.com/v3/launches/')
    .then(value => value.json())
    .then(spacex => {
      let not_tztz = spacex.filter(spacex => spacex.launch_year !== '2020');
      setSpacex(not_tztz);
    })
  }, [])
  return(
    <div>
      {spacex.map((value, index) => <SpaceX key={(index)}  mission_name={value.mission_name} launch_year={value.launch_year} mission_patch_small={value.links.mission_patch_small}/>)}
    </div>
  );
};
