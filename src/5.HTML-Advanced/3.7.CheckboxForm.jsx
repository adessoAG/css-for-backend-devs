import React from 'react';
import { Heading, Image, Link } from 'spectacle';

function SubHeading() {
    return (
        <div>
            <Heading fontSize="h2">So können Formulare auch aussehen</Heading>
            <div className="centered">
                <Image width="600" src="frontend/sitzplan-formular.png"></Image>
                <br />
                <Link href="https://codepen.io/jensgro/pen/DqCxA">zum Codepen</Link>
            </div>
        </div>
    );
}
export default SubHeading;