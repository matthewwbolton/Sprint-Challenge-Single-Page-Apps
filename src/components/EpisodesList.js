import React, { useState, useEffect } from 'react';
import EpisodesCard from './EpisodesCard';
import axios from 'axios';


const EpisodesList = () => {
    
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
      axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/episode/')
           .then(res => {
             console.log(res.data.results);
             setEpisode(res.data.results)
           })
           .catch(err => {
             console.log(err)
           })
    }, [])
  
  
    return (
      <div>
        <EpisodesCard episode={episode} />
      </div>
  
    );
  }

export default EpisodesList;