import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">4 Möglichkeiten, um aus der Situation herauszukommen</Heading>
            <UnorderedList>
                <ListItem>Der umgebende Container wächst mit seinem Inhalt.</ListItem>
                <ListItem>Der Inhalt schrumpft, um in den Container zu passen.</ListItem>
                <ListItem>Der Inhalt wird abgeschnitten, um in den Container zu passen.</ListItem>
                <ListItem>Es gibt einen Overflow, damit der Container in der Größe bleibt, der Inhalt durch eine Scrollbar aber unverändert erreichbar ist.</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
