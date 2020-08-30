import React from 'react';
import { Image, Heading } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">The Holy Trinity</Heading>
            <Image width="100%" className="hori-centered" src="frontend/trinity.png" ></Image>
        </div>
    );
}
export default SubHeading;
