import React from 'react';
import { Link, Image } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Image width="110%" src="frontend/boxmodell.png"></Image>
            <br />
            <Link target="_blank" href="https://codepen.io/argyleink/pen/bGNmgGW">zum Codepen</Link>
        </div>
    );
}
export default SubHeading;
