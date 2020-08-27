import React from 'react';
import { Heading, UnorderedList, ListItem, Appear } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Simple Selektoren</Heading>
            <UnorderedList>
                <Appear><ListItem>Universal Selektor → *</ListItem></Appear>
                <Appear><ListItem>Type Selektor → div, span, img</ListItem></Appear>
                <Appear><ListItem>Class Selektor → .banana, .lol</ListItem></Appear>
                <Appear><ListItem>Id Selektor → #banana, #lol</ListItem></Appear>
                <Appear><ListItem>Attribute Selektor → [data-modal="open"], input[type="checkbox"], title</ListItem></Appear>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
