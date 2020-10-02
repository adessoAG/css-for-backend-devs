import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Spezifitätsregeln</Heading>
            <UnorderedList>
                <ListItem>Universal / :(not) Selektoren haben keine Spezifität  → 0pt.</ListItem>
                <ListItem>Elemente / Pseudo-Elemente-Selektoren → 1 pt.</ListItem>
                <ListItem>Klassen / Pseudo-Klassen / Attribut-Selektoren → 10 pt.</ListItem>
                <ListItem>ID Selector → 100 pt.</ListItem>
                <ListItem>Inline Styles → 1000 pt.</ListItem>
                <ListItem>!important → 10000 pt.</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
