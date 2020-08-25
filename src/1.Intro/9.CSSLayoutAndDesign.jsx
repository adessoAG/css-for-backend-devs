import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <>
            <Heading fontSize="h2">CSS gibt der Seite Layout und Design</Heading>
            <UnorderedList>
                <ListItem><mark>Layout</mark>: horizontale und vertikale Verteilung von Seitenbestandteilen</ListItem>
                <ListItem><mark>Design</mark>: die Optik der Seitenbestandteile ("hübsch machen")</ListItem>
            </UnorderedList>
        </>
    );
}
export default SubHeading;
