import React from 'react';
import { CodePane, Heading, Text } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Der Standard</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`.test {
    position: static;
}`}
            </CodePane>
            <Text>Nur in diesem Fall sind die vier Richtungen <mark>komplett wirkungslos</mark>.</Text>
            <Text>Wenn ein Element <mark>nicht positioniert wurde</mark>, ist es statisch positioniert.</Text>
        </div>
    );
}
export default SubHeading;
