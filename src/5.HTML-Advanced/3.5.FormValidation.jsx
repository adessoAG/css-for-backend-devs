import React from 'react';
import { Text, Heading } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Eingebaute Validierung</Heading>
            <Text>Manche Formularelemente besitzen eingebaute Validierungsregeln. Die können jederzeit mit einer eigenen Regex überschrieben werden.</Text>
            <Text>Dank HTML5 gibt es eine Validierungs-API, die man nutzen kann. Es muss nicht jeder sein eigenes Validierungsskript schreiben.</Text>
        </div>
    );
}
export default SubHeading;
