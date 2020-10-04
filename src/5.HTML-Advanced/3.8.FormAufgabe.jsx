import React from 'react';
import { Heading, Text, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading className="underline" fontSize="h2">Aufgabe</Heading>
            <Text>Ergänzen Sie ein Formular mit einem Submit-Button und Eingabefeldern mit Label für Name und E-Mail. E-Mail soll ein Pflichtfeld sein.</Text>
            <Link target="_blank" href="https://github.com/adessoAG/css-for-backend-devs-aufgaben" className="text-centered">zum Beispiel</Link>
        </div>
    );
}
export default SubHeading;
