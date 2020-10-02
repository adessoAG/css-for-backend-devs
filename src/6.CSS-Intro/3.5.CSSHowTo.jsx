import React from 'react';
import { Heading, CodePane, Table, TableRow, TableCell } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div>
            <Heading fontSize="h3">So fügt man CSS hinzu</Heading>
            <Heading fontSize="text">Internes CSS</Heading>
            <Table>
                <TableRow>
                    <TableCell>
                        <CodePane style={{ width: '60%' }} language="html" theme={lightTheme}>
                            {`/* index.html */
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

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
