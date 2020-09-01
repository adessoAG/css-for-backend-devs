import React from 'react';
import { Heading, Text, Link, Image } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Eine kleine Aufgabe</Heading>
            <Text>Gestalten Sie eine Fläche, zwei Boxen und positionieren Sie diese wie im Bild dargestellt. Als Zusatz können Sie beim Überfahren des Containers <code>.vorne</code> die Hintergrundfarbe des Containers <code>.hinten</code> in <code>#a20000</code> ändern.</Text>
            <Image className="hori-centered" width="400" src="frontend/testaufgabe-positionierung.png"></Image>
            <br />
            <Link className="text-centered" fontSize="monospace" href="https://codepen.io/jensgro/pen/Euwvi">zum Codepen</Link>
        </div>
    );
}
export default SubHeading;
