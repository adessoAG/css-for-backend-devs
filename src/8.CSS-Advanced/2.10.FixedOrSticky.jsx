import React from 'react';
import { CodePane, Heading, Text, Link } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Etwas fixieren</Heading>
            <Text>Methode 1</Text>
            <CodePane language="css" theme={lightTheme}>
                {`.test {
    position: fixed;
}`}
            </CodePane>
            <Text>Methode 2</Text>
            <CodePane language="css" theme={lightTheme}>
                {`.test {
    position: sticky;
}`}
            </CodePane>
            <Link href="https://caniuse.com/#search=sticky" fontSize="monospace">Der IE kennt sticky leider nicht!</Link>
            <Link href="https://codepen.io/jensgro/pen/xvPmQZ" fontSize="monospace">Codepen</Link>
        </div>
    );
}
export default SubHeading;
