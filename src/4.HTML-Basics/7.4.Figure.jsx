import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h2">Ein Bild in einem Figure-Element</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<figure>

    <img src="http://lorempizza.com/300/300"
            alt="Ein toller Alternativtext">

    <figcaption>
        <p>Ein toller Beschreibungstext für
            das Bild innerhalb des
            <code>figure</code>-Elements</p>
    </figcaption>

</figure>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;