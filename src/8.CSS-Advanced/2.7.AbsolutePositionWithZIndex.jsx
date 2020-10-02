import React from 'react';
import { Heading, Image, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Absolut positioniert mit z-index</Heading>
            <Image className="hori-centered" width="100%" src="frontend/mit-z-index.png"></Image>
            <Link className="text-centered" fontSize="monospace" href="https://codepen.io/jensgro/pen/oKoJBj">zum Codepen</Link>
        </div>
    );
}
export default SubHeading;
