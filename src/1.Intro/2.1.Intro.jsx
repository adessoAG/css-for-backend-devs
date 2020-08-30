import React from 'react';
import { Table, TableRow, TableCell, UnorderedList, ListItem, Image } from 'spectacle';
import './image.css';

function SubHeading() {
    return (
        <div>
            <Table>
                <TableRow>
                    <TableCell width="50%">
                        <UnorderedList>
                            <ListItem>Frontend-Architekt bei Adesso</ListItem>
                            <ListItem>Leiter eines JavaScript Competence Centers</ListItem>
                            <ListItem>16 Jahre in der Web-entwicklung</ListItem>
                        </UnorderedList>
                    </TableCell>
                    <TableCell>
                        <Image className="hori-centered avatar" src="frontend/konstantin.png"></Image>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Image className="hori-centered avatar" src="frontend/priyanka.jpg"></Image>
                    </TableCell>
                    <TableCell width="50%">
                        <UnorderedList>
                            <ListItem>Senior Software Engineer bei Adesso</ListItem>
                            <ListItem>Speaker, Writer</ListItem>
                            <ListItem>5 Jahre in der Web-entwicklung</ListItem>
                            <ListItem>Twittert unter @piyukore06</ListItem>
                        </UnorderedList>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    );
}
export default SubHeading;
