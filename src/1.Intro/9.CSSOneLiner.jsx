import React from 'react';
import { Heading, Table, TableRow, TableCell, Image } from 'spectacle';

function SubHeading() {
    return (
        <Table className="centered heading">
            <TableRow>
                <TableCell><Image className="hori-centered" src="frontend/css.png"></Image></TableCell>
                <TableCell width="60%"><Heading fontSize="h3" >CSS macht die Seite hübsch.</Heading></TableCell>
            </TableRow>
        </Table>

    );
}
export default SubHeading;
