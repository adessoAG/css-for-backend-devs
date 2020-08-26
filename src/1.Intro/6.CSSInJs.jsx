import React from 'react';
import { Heading } from 'spectacle';

function SubHeading() {
    return (
        <Heading className="centered-image" fontSize="h3">Auch wenn Sie <mark>CSS in JS</mark> schreiben und nur noch Komponenten in React, Angular oder Vue erstellen, <mark>am Ende ist alles HTML und CSS</mark>. Die Art der Erzeugung ändert nichts an den Regeln der beiden Sprachen.</Heading>
    );
}
export default SubHeading;
