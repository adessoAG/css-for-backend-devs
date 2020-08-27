import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>HTML Elemente</Heading>
            <UnorderedList>
                <ListItem>Block Level elemente</ListItem>
                <ListItem>Inline elemente</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
