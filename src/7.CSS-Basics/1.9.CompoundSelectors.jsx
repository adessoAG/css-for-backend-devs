import React from 'react';
import { Heading, UnorderedList, ListItem, Notes } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Compound Selektoren</Heading>
            <UnorderedList>
                <ListItem>a .link</ListItem>
                <ListItem>a:active</ListItem>
            </UnorderedList>
            <Notes>What happenens if two of the selectors match the same subject? Enter Selector</Notes>
        </div>
    );
}
export default SubHeading;
