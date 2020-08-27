import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';
import './inline.css';

function SubHeading() {
    return (
        <div className="centered">
            <UnorderedList>
                <ListItem>Universal / :(not) Selektoren hat keine Stärke  → 0pt.</ListItem>
                <ListItem>Elemente / Pseudo Elemente Selektoren → 1 pt.</ListItem>
                <ListItem>Klassen / Pseudo Klassen / Attribute Selektoren → 10 pt.</ListItem>
                <ListItem>Id Selector → 100 pt.</ListItem>
                <ListItem>Inline Styles → 1000 pt.</ListItem>
                <ListItem>!important → 10000 pt.</ListItem>
            </UnorderedList>
            <Heading fontSize="h3" className="bg">a.lol.lol</Heading>
        </div>
    );
}
export default SubHeading;
