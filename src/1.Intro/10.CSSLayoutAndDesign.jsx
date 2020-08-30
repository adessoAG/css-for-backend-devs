import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h2">CSS gibt der Seite Layout und Styling</Heading>
            <UnorderedList>
                <ListItem><mark>Layout</mark>: horizontale und vertikale Verteilung von Seitenbestandteilen</ListItem>
                <ListItem><mark>Styling</mark>: die Optik der Seitenbestandteile ("hübsch machen")</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
