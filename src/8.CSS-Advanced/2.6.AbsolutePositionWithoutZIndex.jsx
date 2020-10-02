import React from 'react';
import { Heading, Image, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Absolut positioniert ohne z-index</Heading>
            <Image className="hori-centered" width="100%" src="frontend/ohne-z-index.png"></Image>
            <Link className="text-centered" fontSize="monospace" href="https://codepen.io/jensgro/pen/oKoJBj">zum Codepen</Link>
        </div>
    );
}
export default SubHeading;
