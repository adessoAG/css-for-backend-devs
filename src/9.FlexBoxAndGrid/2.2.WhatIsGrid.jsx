import React from 'react';
import {Heading, Table, TableRow, TableCell, Image, UnorderedList, ListItem} from 'spectacle';

function SubHeading() {
    return (
      <div>
        <Heading fontSize="h2">Was ist CSS-Grid?</Heading>

        <Table>
          <TableRow>
            <TableCell width="60%">
              <UnorderedList>
                <ListItem>Erste Möglichkeit zum Layouting seit Tabellen und Frames ;)</ListItem>
                <ListItem>Unterteilung der View in Columns und Rows</ListItem>
                <ListItem>Durch MS gepusht und W3 definiert (leider anders als durch Microsoft umgesetzt)</ListItem>
              </UnorderedList>
            </TableCell>
            <TableCell><Image className="hori-centered" src="frontend/css-grid.png"></Image></TableCell>
          </TableRow>
        </Table>

      </div>

    );
}
export default SubHeading;
