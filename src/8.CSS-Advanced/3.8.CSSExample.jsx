import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h2">Ein Beispiel - das CSS</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`/**
* Semantik und Optik sind entkoppelt
*/
.paragraphToList {
    margin: 20px;
}
.paragraphToList p {
    display: list-item;
    margin-left: 10px;
    color: black
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
