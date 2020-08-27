import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading fontSize="h3">Pseudo Selektoren</Heading>
            <UnorderedList>
                <ListItem>Pseudo Elemente =&gt; ::before, ::after</ListItem>
                <ListItem>Pseudo Klassen =&gt; :active, :visited</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
