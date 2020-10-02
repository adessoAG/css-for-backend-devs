import React from 'react';
import { Heading, Table, TableRow, TableCell, Image } from 'spectacle';

function SubHeading() {
    return (
        <Table className="centered heading">
            <TableRow>
                <TableCell><Image className="hori-centered" src="frontend/html.png"></Image></TableCell>
                <TableCell width="60%"><Heading fontSize="h3" >HTML strukturiert den Inhalt einer Seite und gibt ihm Sinn.</Heading></TableCell>
            </TableRow>
        </Table>

    );
}
export default SubHeading;
