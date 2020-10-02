import React from 'react';
import { Heading, CodePane, Table, TableRow, TableCell } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div>
            <Heading fontSize="h3">So fügt man CSS hinzu</Heading>
            <Heading fontSize="text">Externes CSS</Heading>
            <Table>
                <TableRow>
                    <TableCell>
                        <CodePane style={{ width: '60%' }} language="html" theme={lightTheme}>
                            {`/* index.html */
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
                        </CodePane>
                    </TableCell>
                    <TableCell>
                        <CodePane style={{ width: '60%' }} language="css" theme={lightTheme}>
                            {`<!-- mystyle.css -->
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}`}
                        </CodePane>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
}
export default SubHeading;
