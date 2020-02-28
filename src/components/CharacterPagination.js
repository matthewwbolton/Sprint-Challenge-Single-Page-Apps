import React, { useEffect, useState } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from 'axios';


const CharacterPagination = (props) => {
  
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${page}`)
             .then(res => {
                 console.log(res.data);
                 setPage(res.data.results)
             })
             .catch(err => {
                 console.log(err)
             })
    },[page])
  
    return (

        <Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href={setPage(1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href={setPage(page - 1)} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={setPage(1)}>
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={setPage(2)}>
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={setPage(3)}>
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={setPage(4)}>
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={setPage(5)}>
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href={setPage(page +1)}/>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href={setPage(25)} />
      </PaginationItem>
    </Pagination>
    
  );
}

export default CharacterPagination;