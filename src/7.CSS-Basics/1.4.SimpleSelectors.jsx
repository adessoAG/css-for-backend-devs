import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading fontSize="h3">Simple Selektoren</Heading>
            <UnorderedList>
                <ListItem>Universal Selektor =&gt; *</ListItem>
                <ListItem>Type Selektor =&gt; div, span, img</ListItem>
                <ListItem>Class Selektor =&gt; .banana, .lol</ListItem>
                <ListItem>Id Selektor =&gt; #banana, #lol</ListItem>
                <ListItem>Attribute Selektor =&gt; data-, lang, title</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
