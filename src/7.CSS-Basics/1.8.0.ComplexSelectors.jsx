import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Complex Selektoren</Heading>
            <UnorderedList>
                <ListItem>Decendent Combinator → ul li, div p, form legend</ListItem>
                <ListItem>Child Combinator → ul &gt; li, div &gt; p, form &gt; legend</ListItem>
                <ListItem>Sibling Combinator → div + p, .col + .col</ListItem>
                <ListItem>Subsequent Combinator → div ~ p</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
