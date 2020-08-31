import React from 'react';
import { Heading, Text, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading className="underline" fontSize="h3">Aufgabe</Heading>
            <Text>Hallo Welt!!</Text>
            <Link target="_blank" href="https://github.com/adessoAG/css-for-backend-devs-aufgaben" className="text-centered">zum Beispiel</Link>
        </div>
    );
}
export default SubHeading;
