import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">So fügt man CSS hinzu</Heading>
            <UnorderedList>
                <ListItem>Externes CSS</ListItem>
                <ListItem>Internes CSS</ListItem>
                <ListItem>Inline CSS</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
