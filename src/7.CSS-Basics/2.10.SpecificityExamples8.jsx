import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';
import './inline.css';

function SubHeading() {
    return (
        <div className="centered-image">
            <UnorderedList>
                <ListItem>Universal, :(not) Selektoren haben keine Stärke</ListItem>
                <ListItem>Elemente / Pseudo Elemente Selektoren =&gt; 1 pt</ListItem>
                <ListItem>Klassen / Pseudo Klassen / Attribute Selektoren =&gt; 10 pt</ListItem>
                <ListItem>Id Selector =&gt; 100 pt</ListItem>
                <ListItem>Inline Styles =&gt; 1000 pt</ListItem>
                <ListItem>!important =&gt; 10000 pt</ListItem>
            </UnorderedList>
            <Heading fontSize="h3" className="bg">a.lol.lol</Heading>
        </div>
    );
}
export default SubHeading;
