import React from 'react';
import {Heading, CodePane, UnorderedList, ListItem} from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Media Queries</Heading>
            <UnorderedList>
                <ListItem>Sehr wichtig für Responsive Design!</ListItem>
                <ListItem>Änderung der Darstellung eines Dokuments für verschiedene Ausgabemedien</ListItem>
                <ListItem>Abfrage von  Medientyp (Bildschirm, Drucker) und/oder Medienmerkmalen (z. B. Abmessungen)</ListItem>
                <ListItem>CSS-Regeln werden nur dann angewendet, wenn die Kriterien der Abfrage erfüllt sind</ListItem>
                <ListItem>Achtung: Normale CSS-Regeln! Spezifität muss beachtet werden!</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
