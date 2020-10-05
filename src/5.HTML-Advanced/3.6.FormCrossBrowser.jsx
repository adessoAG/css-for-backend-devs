import React from 'react';
import { Heading, ListItem, UnorderedList } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Eingebaute Validierung - Nachteile</Heading>
            <UnorderedList>
                <ListItem>Verhalten und Aussehen unterscheidet sich von Browser zu Browser!</ListItem>
                <ListItem>Styling nur eingeschränkt möglich.</ListItem>
                <ListItem>Komplexe Validierungslogik lässt sich nicht umsetzen (z.B. abhängige Felder).</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
