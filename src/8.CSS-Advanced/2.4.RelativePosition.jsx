import React from 'react';
import { CodePane, Heading, Text } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Relative Positionierung</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`.test {
    position: relative;
}`}
            </CodePane>
            <Text>Das Element bleibt im Dokumentenfluss, kann aber einfach verschoben werden. Die Eigenschaft <mark><code>z-index</code></mark> kann in diesem Zusamenhang wichtig sein.</Text>
        </div>
    );
}
export default SubHeading;
