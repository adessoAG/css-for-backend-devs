import React from 'react';
import { Heading, Text, Table, TableRow, TableCell, TableBody, Link } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered">
            <Heading>CSS Pseudo Klassen</Heading>
            <Text>ist ein Schlüsselbegriff, welcher hinter einen Selektor gestellt wird, um einen besonderen Zustand abzufragen.</Text>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:active">:active</Link></TableCell>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:focus">:focus</Link></TableCell>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:checked">:checked</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:first">:first</Link></TableCell>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:not">:not()</Link></TableCell>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:visited">:visited</Link></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:nth-child">:nth-child()</Link></TableCell>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:hover">:hover</Link></TableCell>
                        <TableCell><Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/:disabled">:disabled</Link></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Link target="_blank" href="https://developer.mozilla.org/de/docs/Web/CSS/pseudo-classes">...</Link>
        </div>
    );
}
export default SubHeading;
