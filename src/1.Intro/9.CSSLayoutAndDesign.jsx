import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading fontSize="h2">CSS gibt der Seite Layout und Design</Heading>
            <UnorderedList>
                <ListItem><mark>Layout</mark>: horizontale und vertikale Verteilung von Seitenbestandteilen</ListItem>
                <ListItem><mark>Design</mark>: die Optik der Seitenbestandteile ("hübsch machen")</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
