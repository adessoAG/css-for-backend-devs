import React from 'react';
import { Image, Link } from 'spectacle';

function SubHeading() {
    return (
        <Link target="_blank" href="https://madebymike.github.io/html5-periodic-table/">
            <Image className="centered" width="1000" src="frontend/periodic-table-of-html-elements.png"></Image>
        </Link>
    );
}
export default SubHeading;
