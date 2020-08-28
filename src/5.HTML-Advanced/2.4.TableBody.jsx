import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Der Tabellen-Body</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<table>
    <!-- ..... -->
    <tbody>
        <tr>
            <th></th>
            <td></td>
        </tr>
        <tr>
            <th></th>
            <td></td>
        </tr>
    </tbody>
    <!-- ..... -->
</table>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
