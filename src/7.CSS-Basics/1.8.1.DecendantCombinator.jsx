import React from 'react';
import { Heading, Table, TableRow, TableCell, CodePane } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import './1.8.1.decendant.css';
function SubHeading() {
    return (
        <div>
            <Heading fontSize="h3">Complex Selektoren</Heading>
            <Heading fontSize="text">Decendent Combinator → ul li, div p, form legend</Heading>
            <Table>
                <TableRow>
                    <TableCell>
                        <CodePane style={{ width: '60%' }} language="html" theme={lightTheme}>
                            {`<!DOCTYPE html>
<html>
<head>
<style>
.div .p {
  background-color: yellow;
}
</style>
</head>
<body>

<div class="div">
  <p class="p">Paragraph 1 in the div.</p>
  <p class="p">Paragraph 2 in the div.</p>
  <section><p class="p">Paragraph 3 in the div.</p></section>
</div>

<p class="p">Paragraph 4. Not in a div.</p>
<p class="p">Paragraph 5. Not in a div.</p>

</body>
</html>`}
                        </CodePane>
                    </TableCell>
                    <TableCell>
                        <div className="div1">
                            <p className="p1">Paragraph 1 in the div.</p>
                            <p className="p1">Paragraph 2 in the div.</p>
                            <section><p className="p1">Paragraph 3 in the div.</p></section>
                        </div>

                        <p className="p1">Paragraph 4. Not in a div.</p>
                        <p className="p1">Paragraph 5. Not in a div.</p>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
}
export default SubHeading;
