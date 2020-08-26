import React from 'react';
import { Heading, Image, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading>Absolut positioniert mit z-index</Heading>
            <Image width="500" src="frontend/mit-z-index.png"></Image>
            <Link fontSize="monospace" href="https://codepen.io/jensgro/pen/oKoJBj">Codepen</Link>
        </div>
    );
}
export default SubHeading;
