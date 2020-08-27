import React from 'react';
import { CodePane, Heading } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Wohin positionieren?</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`.alle-4-richtungen {
    top: 10px;
    right: 0;
    bottom: 1em;
    left: 20%;
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
