import React from 'react';
import { Heading, CodePane, Text } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h2">Das <code>picture</code>-Element</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<picture>
    <source media="(min-width: 800px)"
            srcset="big.jpg 1x, big-hd.jpg 2x">
    <source media="(max-width:400px)" srcset="small.jpg 1x, small-hd.jpg 2x">
    <img src="fallback.jpg" alt="Tolle Bildbeschreibung">
</picture>`}
            </CodePane>
            <Text>Die source-Elemente werden von oben nach unten gelesen. Alles unter 800px-Breite bekommt also die zweite Source. Oder das Fallback-Bild, wenn es die Elemente nicht kennt.</Text>
        </div>
    );
}
export default SubHeading;
