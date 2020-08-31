import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">So fügt man CSS hinzu</Heading>
            <UnorderedList>
                <ListItem>Externe CSS</ListItem>
                <ListItem>Interne CSS</ListItem>
                <ListItem>Inline CSS</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
