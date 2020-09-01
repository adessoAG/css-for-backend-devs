import React from 'react';
import { Heading, Table, TableRow, TableCell, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import './1.8.4.subsequent.css';
function SubHeading() {
    return (
        <div>
            <Heading fontSize="h3">Complex Selektoren</Heading>
            <Heading fontSize="text">Subsequent Combinator → div ~ p</Heading>
            <Table>
                <TableRow>
                    <TableCell>
                        <CodePane style={{ width: '60%' }} language="html" theme={lightTheme}>
                            {`< !DOCTYPE html>
<html>
    <head>
        <style>
            .div ~ .p {
                background - color: yellow;
            }
            </style>
    </head>
    <body>

        <p class="p">Paragraph 1.</p>

        <div class="div">
            <p class="p">Paragraph 2.</p>
        </div>

        <p class="p">Paragraph 3.</p>
        <code>Some code.</code>
        <p class="p">Paragraph 4.</p>

    </body>
</html>
`}
                        </CodePane>
                    </TableCell>
                    <TableCell>
                        <p className="p4">Paragraph 1.</p>

                        <div className="div4">
                            <p className="p4">Paragraph 2.</p>
                        </div>

                        <p className="p4">Paragraph 3.</p>
                        <code>Some code.</code>
                        <p className="p4">Paragraph 4.</p>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
}
export default SubHeading;
