
import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

import styled from 'styled-components';

const NewCard = styled(Card)`
  width: 30%;
  margin: 1%;
  border: 1px solid black;
`;

const NewDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EpisodesCard = (props) => {

    return (
      <NewDiv className='character-container'>
        {props.episode.map((elem, i) => (
        <NewCard key={i}>
          <NewCardBody>
            <CardTitle>Name: {elem.name}</CardTitle>
            <CardSubtitle>Air-Date: {elem.air_date}</CardSubtitle>
            <CardText>Episode: {elem.episode}</CardText>
          </NewCardBody>
        </NewCard>
        ))}
      </NewDiv>
    );
  };

  export default EpisodesCard;
