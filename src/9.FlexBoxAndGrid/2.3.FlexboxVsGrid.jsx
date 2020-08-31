import React from 'react';
import {Heading, Table, TableRow, TableCell, Image, UnorderedList, ListItem} from 'spectacle';

function SubHeading() {
    return (
      <div>
        <Heading fontSize="h2">Flexbox vs. CSS-Grid</Heading>

        <Table>
          <TableRow>
            <TableCell width="60%">
              Nachteil Flexbox:
              <UnorderedList>
                <ListItem>Entweder Bestimmung der Position in der Horizontalen oder Vertikalen</ListItem>
                <ListItem>Flexbox innerhalb von CSS-Grid zur Ausrichtung des Content geeignet</ListItem>
              </UnorderedList>
            </TableCell>
            <TableCell><Image className="hori-centered" src="frontend/flex.png"></Image></TableCell>
          </TableRow>
        </Table>

      </div>

    );
}
export default SubHeading;
