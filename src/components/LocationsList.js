import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';


const LocationsList = () => {

    const [location, setLocation] = useState([]);
    

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/')
         .then(res => {
           console.log(res.data);
           setLocation(res.data.results)
         })
         .catch(err => {
           console.log(err)
         })
  }, [])


  return (
    <div>
      <LocationCard location={location}/>
    </div>

  );
}
    


export default LocationsList;
