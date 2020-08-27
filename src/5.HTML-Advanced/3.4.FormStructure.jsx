import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Strukturierung</Heading>
            <UnorderedList>
                <ListItem>Formularelemente passen semantisch nicht in <code>p</code>-Tags.</ListItem>
                <ListItem><code>DIV</code> erscheint angebracht.</ListItem>
                <ListItem>Größere Formulare kann man mittels <code>fieldset</code> und <code>legend</code> strukturieren. Das Styling ist dann aber keine Freude.</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
