import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
         .then(res => {
           console.log(res.data.results);
           setCharacter(res.data.results)
         })
         .catch(err => {
           console.log(err)
         })
  }, [])


  return (
    <div>
      <SearchForm character={character} setCharacter={setCharacter} />
      <CharacterCard character={character}/>
    </div>

  );
}
