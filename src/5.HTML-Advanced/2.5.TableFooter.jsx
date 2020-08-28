import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Der Tabellen-Fuss</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<table>
    <thead>
        <!-- ..... -->
    </thead>
    <tbody>
        <!-- ..... -->
    </tbody>

    <tfoot>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
</table>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;
