import React from 'react';
import { Heading, Image } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered heading">
            <Heading fontSize="h3">CSS - die Seite hübsch machen</Heading>
            <Image className="hori-centered" src="frontend/css-is-awesome.jpg" ></Image>
        </div>
    );
}
export default SubHeading;
