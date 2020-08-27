import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Welche Hintergrundfarbe haben die beiden <code>DIV</code>s?</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<div class="red blue"></div>
<div class="blue red"></div>`}
            </CodePane>
            <br />
            <CodePane language="css" theme={lightTheme}>
                {`.red { background-color: red;}
.blue {background-color: blue;}`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
