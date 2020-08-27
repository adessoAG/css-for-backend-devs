import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Pseudo Selektoren</Heading>
            <UnorderedList>
                <ListItem>Pseudo Elemente → ::before, ::after</ListItem>
                <ListItem>Pseudo Klassen → :active, :visited</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
