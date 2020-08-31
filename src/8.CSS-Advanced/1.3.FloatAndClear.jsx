import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Float und clear</Heading>
            <UnorderedList>
                <ListItem><mark>float: left</mark> zieht Element aus den Dokumentfluss an die linke Innenkante seines Elternelements</ListItem>
                <ListItem><mark>float: right</mark> zieht Element aus den Dokumentfluss an die rechte Innenkante seines Elternelements</ListItem>
                <ListItem><mark>float: clear</mark> der nachfolgende Inhalt beginnt wieder an der ersten Position der Leserichtung</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
