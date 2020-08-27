import React from 'react';
import { CodePane, Heading, Text } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Absolute Positionierung</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`.test {
    position: absolute;
}`}
            </CodePane>
            <Text>Das Element wird aus dem Dokumentenfluss gezogen und wird von nichts anderem mehr beeinflusst. Die Eigenschaft <mark><code>z-index</code></mark> ist in diesem Zusamenhang wichtig.</Text>
        </div>
    );
}
export default SubHeading;
