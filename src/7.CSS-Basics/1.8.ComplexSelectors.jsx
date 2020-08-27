import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading>Complex Selektoren</Heading>
            <UnorderedList>
                <ListItem>Decendent Combinator =&gt; ul li, div p, form legend</ListItem>
                <ListItem>Child Combinator =&gt; ul &gt; li, div &gt; p, form &gt; legend</ListItem>
                <ListItem>Sibling Combinator =&gt; div + p, form + legend</ListItem>
                <ListItem>Subsequent Combinator =&gt; div ~ p</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
