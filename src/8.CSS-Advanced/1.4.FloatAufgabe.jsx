import React from 'react';
import { Heading, Text, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading className="underline" fontSize="h2">Aufgabe</Heading>
            <Text>Fügen Sie neben dem Image einen mehrzeiligen Text ein und sorgen Sie dafür, dass das Image mit float rechts neben dem Text angeordnet wird.</Text>
            <Link target="_blank" href="https://github.com/adessoAG/css-for-backend-devs-aufgaben" className="text-centered">zum Beispiel</Link>
        </div>
    );
}
export default SubHeading;
