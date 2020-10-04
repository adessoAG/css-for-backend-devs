import React from 'react';
import {Heading, ListItem, UnorderedList} from 'spectacle';

function SubHeading() {
    return (
      <div className="centered">
        <Heading fontSize="h2">Navigation</Heading>
        <UnorderedList>
          <ListItem>Das <code>nav</code>-Element gibt der Liste eine zusätzliche Semantik</ListItem>
          <ListItem>Z.B. Screenreader können das auswerten</ListItem>
          <ListItem>Code wird lesbarer</ListItem>
          <ListItem>Pagination und Link-Listen z.B. im Footer sind keine Navigation! Gemäß W3C-Standard.</ListItem>
          <ListItem>Es soll verhindert werden, dass ein großer Teil der Seite aus Navigationen besteht.</ListItem>
        </UnorderedList>
      </div>
    );
}
export default SubHeading;
