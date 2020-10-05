import React from 'react';
import {UnorderedList, ListItem, Heading} from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Ein paar Grundregeln</Heading>

            <UnorderedList className="centered">
                <ListItem>Relative Einheiten benutzen</ListItem>
                <ListItem>Übergangspunkte definieren</ListItem>
                <ListItem>Text für das Lesen optimieren</ListItem>
                <ListItem>Niemals Content vollständig verbergen</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
