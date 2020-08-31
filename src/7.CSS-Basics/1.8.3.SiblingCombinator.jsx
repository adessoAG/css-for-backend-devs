import React from 'react';
import { Heading, Table, TableRow, TableCell, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import './1.8.3.sibling.css';
function SubHeading() {
    return (
        <div>
            <Heading fontSize="h3">Complex Selektoren</Heading>
            <Heading fontSize="text">Sibling Combinator → div + p, .col + .col</Heading>
            <Table>
                <TableRow>
                    <TableCell>
                        <CodePane style={{ width: '60%' }} language="html" theme={lightTheme}>
                            {`<!DOCTYPE html>
<html>
<head>
<style>
.div + .p {
  background-color: yellow;
}
</style>
</head>
<body>

<div class="div">
  <p class="p">Paragraph 1 in the div.</p>
  <p class="p">Paragraph 2 in the div.</p>
</div>

<p class="p">Paragraph 3. Not in a div.</p>
<p class="p">Paragraph 4. Not in a div.</p>

</body>
</html>
`}
                        </CodePane>
                    </TableCell>
                    <TableCell>
                        <div className="div3">
                            <p className="p3">Paragraph 1 in the div.</p>
                            <p className="p3">Paragraph 2 in the div.</p>
                        </div>

                        <p className="p3">Paragraph 3. Not in a div.</p>
                        <p className="p3">Paragraph 4. Not in a div.</p>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
}
export default SubHeading;
