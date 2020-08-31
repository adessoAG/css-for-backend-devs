import React from 'react';
import {Heading, ListItem, Text, UnorderedList} from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
          <Heading fontSize="h2">Nicht alles ist eine Navigation</Heading>
          <UnorderedList>
            <ListItem>Pagination und Link-Listen z.B. im Footer sind keine Navigation! Gemäß W3C-Standard.</ListItem>
            <ListItem>Es soll verhindert werden, dass ein großer Teil der Seite aus Navigationen besteht.</ListItem>
          </UnorderedList>
        </div>
    );
}
export default SubHeading;
