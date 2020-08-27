import React from 'react';
import { CodePane, Heading } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>Der Kontext ist wichtig!</Heading>
            <CodePane language="css" theme={lightTheme}>
                {`.der-wrapper {
    position: relative;
}

.innendrin {
    position: absolute;
    top: 20px;
    right: 20px;
}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
