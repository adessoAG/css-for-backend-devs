import React from 'react';
import { Heading, CodePane, Text } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h2">Basics</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<img src="http://lorempizza.com/300/300"
                alt="Ein toller Alternativtext">`}
            </CodePane>
            <CodePane language="html" theme={lightTheme}>
                {`<a href="produkte.html">
    <img src="icon.gif" alt="">
    Produktübersicht
</a>`}
            </CodePane>
            <Text>Ist ein Bild nur schmückendes Beiwerk, kann der Alt-Text leergelassen werden. Aber bitte nicht gleich das ganze Alt-Attribut entfernen.</Text>
        </div>
    );
}
export default SubHeading;