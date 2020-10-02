import React from 'react';
import {Heading, ListItem, Text, UnorderedList} from 'spectacle';

function SubHeading() {
  return (
    <>

      <div className="centered">
        <Heading fontSize="h2">Die Browser-Landschaft</Heading>

        <UnorderedList>
          <ListItem><Text fontSize="35px">Aktuell dominiert Chrome die Landschaft. Dessen Engine <mark>Blink</mark> basiert
            auf <mark>Webkit</mark>.</Text></ListItem>
          <ListItem><Text fontSize="35px">Blink wird auch von <mark>Opera</mark> und Vivaldi genutzt.</Text></ListItem>
          <ListItem><Text fontSize="35px">Webkit treibt immer noch <mark>Safari</mark> (macOS und iOS) an.</Text></ListItem>
          <ListItem><Text fontSize="35px">Der <mark>Android-Browser</mark> und der neue <mark>Edge</mark> basieren
            auf <mark>Chromium</mark>, und sind somit auch mit Chrome verwandt.</Text></ListItem>
        </UnorderedList>

      </div>
    </>
  );
}

export default SubHeading;
