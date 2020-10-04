import React from 'react';
import { Heading, UnorderedList, ListItem} from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Eingebaute Validierung</Heading>
            <UnorderedList>
                <ListItem>Manche Formularelemente besitzen eingebaute Validierungsregeln (z.B. email).</ListItem>
                <ListItem>Validierungsregeln können mit Regex ergänzt oder überschrieben werden (pattern-Attribut).</ListItem>
                <ListItem>Weitere Möglichkeiten wie z.b. "required".</ListItem>
            </UnorderedList>
        </div>
    );
}
export default SubHeading;
