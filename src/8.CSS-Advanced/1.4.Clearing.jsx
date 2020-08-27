import React from 'react';
import { Heading, UnorderedList, ListItem, Text, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Möglichkeiten des Clearings</Heading>
            <UnorderedList>
                <ListItem>Der Elterncontainer des/der Floats bekommt ein <code>overflow: hidden</code>.</ListItem>
                <ListItem>Es wird der <mark>clearfix-Hack</mark> auf dem Elterncontainer eingesetzt.</ListItem>
                <ListItem>Am Ende der Floatumgebung wird ein leeres Element mit <code>clear</code> gesetzt.</ListItem>
            </UnorderedList>
            <Text>Wichtig ist also immer der Bezug zum Elterncontainer!</Text>
            <Link fontSize="monospace" href="https://codepen.io/jensgro/pen/qgzMYy">Codepen zum Spielen</Link>
            <Link fontSize="monospace" href="https://css-tricks.com/clearfix-a-lesson-in-web-development-evolution">ein paar (geschichtliche) Hintergründe zum Clearfix-Hack</Link>
        </div>
    );
}
export default SubHeading;
