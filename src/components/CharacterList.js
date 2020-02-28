import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
// import CharacterPagination from './CharacterPagination';
import PageButton from './PageButton';
import styled from 'styled-components';

const NewDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
         .then(res => {
           console.log(res.data);
           setCharacter(res.data.results)
         })
         .catch(err => {
           console.log(err)
         })
  }, [])

  useEffect(() => {
    axios
        .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(res => {
            console.log(res.data.results);
            setCharacter(res.data.results);
        })
        .catch(err => {
            console.log(err)
        })
}, [page])


  return (
    <div>
      <SearchForm character={character} setCharacter={setCharacter} />
      <CharacterCard character={character}/>
      <NewDiv>
      <PageButton page={page} setPage={setPage}/>
      </NewDiv>
    </div>

  );
}
