import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Der Tabellenkopf</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
    </thead>
        <!-- ..... -->
</table>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
