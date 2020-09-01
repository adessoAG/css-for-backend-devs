import React from 'react';
import { Heading, Table, TableRow, TableCell, Image } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
  return (
    <div>
      <Heading fontSize="h2">Was ist CSS-Grid?</Heading>

      <Table>
        <TableRow>
          <TableCell width="60%">
            {/*<CodePane language="css" theme={lightTheme}>*/}
            {/*    .item1 {grid-area: header;}*/}
            {/*    .item2 {grid-area: sitebar;}*/}
            {/*    .item3 {grid-area: main;}*/}
            {/*    .item5 {grid-area: footer;}*/}

            {/*    .grid-container {*/}
            {/*    display: grid;*/}
            {/*    grid-template-areas:*/}
            {/*    'header header header header'*/}
            {/*    'main main . sitebar'*/}
            {/*    'footer footer footer footer';*/}
            {/*    grid-gap: 10px;*/}
            {/*    background-color: #2196F3;*/}
            {/*    padding: 10px;*/}
            {/*  }*/}
            {/*  }*/}
            {/*</CodePane>*/}
            {/*<CodePane language="html" theme={lightTheme}>*/}
            {/*  {*/}
            {/*    <div class="grid-container">*/}
            {/*      <div class="item1">Header</div>*/}
            {/*      <div class="item3">Main</div>*/}
            {/*      <div class="item4">Sitebar</div>*/}
            {/*      <div class="item5">Footer</div>*/}
            {/*    </div>*/}
            {/*  }*/}
            {/*</CodePane>*/}
          </TableCell>
          <TableCell><Image className="hori-centered" src="frontend/css-grid.png"></Image></TableCell>
        </TableRow>
      </Table>

    </div>

  );
}
export default SubHeading;
