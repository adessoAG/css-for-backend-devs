import React from 'react';
import { UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <UnorderedList className="centered">
            <ListItem>Use relative units</ListItem>
            <ListItem>Define transition points</ListItem>
            <ListItem>Optimize text for reading</ListItem>
            <ListItem>Never completely hide content</ListItem>
        </UnorderedList>
    );
}
export default SubHeading;
