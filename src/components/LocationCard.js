
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

const LocationCard = (props) => {

    return (
      <NewDiv className='character-container'>
        {props.location.map((elem, i) => (
        <NewCard key={i}>
          <NewCardBody>
            <CardTitle>Location: {elem.name}</CardTitle>
            <CardSubtitle>Type: {elem.type}</CardSubtitle>
            <CardText>Dimension: {elem.dimension}</CardText>
          </NewCardBody>
        </NewCard>
        ))}
      </NewDiv>
    );
  };



















  //   return (
//     <div>
//       {props.location.map((elem, i) => {
//       <Card key={i}>
//         <CardBody>
//           <CardTitle>Location Name: {elem.name}</CardTitle>
//           <CardSubtitle> Location Type: {elem.type}</CardSubtitle>
//           <CardText>Location Dimension: {elem.dimension}</CardText>
//         </CardBody>
//       </Card>
//       })}
//     </div>
//   );
// };

export default LocationCard;