import React from 'react';
import { Heading, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import '../prism.css';

function SubHeading() {
    return (
        <div>
            <Heading fontSize="h2">Valide ≠ Sematisch Korrekt!</Heading>
            <CodePane language="html" theme={lightTheme}>
                {`<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Dieses Dokument ist valide!</title>
</head>
<body>
    <table>
    <tr>
        <td colspan="3">HEADER</td>
    </tr>
    <tr>
        <td><strong>LEFT</strong></td>
        <td><em><u>CENTER</u></em></td>
        <td><strong>RIGHT</strong></td>
    </tr>
    <tr>
        <td colspan="3">FOOTER</td>
    </tr>
    </table>
</body>
</html>`}
            </CodePane>
        </div>
    );
}
export default SubHeading;