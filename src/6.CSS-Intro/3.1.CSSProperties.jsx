import React from 'react';
import { Heading, Image, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered heading">
            <Heading fontSize="h3">CSS Properties</Heading>
            <Link target="_blank" href="https://www.w3schools.com/cssref/"><Image width="100%" src="frontend/properties.png"></Image></Link>
        </div>
    );
}
export default SubHeading;
