import React from 'react';
import { Heading, CodePane, Text, Table, TableBody, TableRow, TableCell, UnorderedList, ListItem } from 'spectacle';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';

function SubHeading() {
    return (
        <div className="centered">
            <Heading fontSize="h3">Skeleton von Basic HTML Seite</Heading>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <UnorderedList>
                                <ListItem><Text fontSize="monospace">Doctype: Gibt die verwendete Dokumenttypdefinition (DTD) an, z. B. HTML 5</Text></ListItem>
                                <ListItem><Text fontSize="monospace">HEAD: Enthält neben Titel hauptsächlich technische oder dokumentarische Informationen</Text></ListItem>
                                <ListItem><Text fontSize="monospace">BODY: Enthält den eigentlichen anzuzeigenden Inhalt des HTML-Dokuments</Text></ListItem>
                            </UnorderedList>
                        </TableCell>
                        <TableCell>
                            <CodePane language="html" theme={lightTheme}>
                                {`<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dokumententitel</title>
    
    <link rel="stylesheet" href="styles.css">
    <script src="script.js"></script>
</head>`}
                            </CodePane>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    );
}
export default SubHeading;
