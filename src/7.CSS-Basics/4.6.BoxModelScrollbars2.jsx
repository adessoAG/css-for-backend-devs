import React from 'react';
import { Link, Image } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Image className="hori-centered" width="70%" src="frontend/boxmodell-scrollbar.png"></Image>
            <br />
            <Link className="hori-centered" target="_blank" href="https://codepen.io/argyleink/pen/bGNmgGW">zum Codepen</Link>
        </div>
    );
}
export default SubHeading;
