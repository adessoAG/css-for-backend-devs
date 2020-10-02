import React from 'react';
import { Heading, Table, TableRow, TableCell, Image } from 'spectacle';

function SubHeading() {
    return (
        <Table className="centered heading">
            <TableRow>
                <TableCell><Image width="45%" className="hori-centered" src="frontend/js.png"></Image></TableCell>
                <TableCell width="60%"><Heading fontSize="h3" >Mit Javascript kann man webseiten dynamisch gestalten.</Heading></TableCell>
            </TableRow>
        </Table>

    );
}
export default SubHeading;
