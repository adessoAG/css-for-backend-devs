import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h2">Ein Beispiel - das HTML</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<!-- content to be placed inside <body>…</body> -->
<div class="paragraphToList">
    <p>Das ist ein Absatz.</p>
    <p>Das ist noch ein Absatz.</p>
    <p>Aber alle sehen aus, als wären sie Teil einer Liste.</p>
    <p>Sind sie aber nicht.</p>
    <p>Sie sehen nur so aus.</p>
</div>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
