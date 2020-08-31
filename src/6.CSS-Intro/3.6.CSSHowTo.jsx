import React from 'react';
import { Heading, CodePane, Table, TableRow, TableCell } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div>
            <Heading fontSize="h3">So fügt man CSS hinzu</Heading>
            <Heading fontSize="text">Inline CSS</Heading>
            <Table>
                <TableRow>
                    <TableCell>
                        <CodePane style={{ width: '60%' }} language="html" theme={lightTheme}>
                            {`/* index.html */
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>`}
                        </CodePane>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
}
export default SubHeading;
