import React from 'react';
import { Heading, Image, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h2">Das Ergebnis</Heading>
            <Image width="600" src="frontend/fake-liste.png"></Image>
            <br />
            <Link fontSize="monospace" href="http://dabblet.com/gist/7b9990fae51783cabf56">Das Beispiel bei dabblet</Link>
        </div>
    );
}
export default SubHeading;
