import React from 'react';
import {Heading, ListItem, Text, UnorderedList} from 'spectacle';

function SubHeading() {
  return (
    <>
      <div className="centered">

        <Heading fontSize="h2">Nichts ist von Dauer</Heading>
        <UnorderedList>
          <ListItem><Text fontSize="35px">IE6 hatte mal über 90% Marktanteil! Trotzdem konnte das Browsermonopols von Microsoft gebrochen
            werden!</Text></ListItem>
          <ListItem><Text fontSize="35px">Es wäre sehr kurzsichtig, sich nur auf Chrome zu konzentrieren</Text></ListItem>
          <ListItem><Text fontSize="35px">Der IE ist in großen Firmennetzwerken und Behörden immer noch von Bedeutung. Allerdings stellt
            Microsoft den Support 2021 endgültig ein!</Text></ListItem>
        </UnorderedList>

      </div>
    </>
  );
}

export default SubHeading;
