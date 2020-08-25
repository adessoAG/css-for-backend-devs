import React from 'react';
import { UnorderedList, ListItem, Heading } from 'spectacle';

function SubHeading() {
    return (
        <>
            <Heading fontSize="h2">Früher ...</Heading>
            <UnorderedList>
                <ListItem>Editor auf</ListItem>
                <ListItem>HTML schreiben</ListItem>
                <ListItem>CSS ergänzen</ListItem>
                <ListItem>JS irgendwoher kopieren und modifizieren</ListItem>
                <ListItem>FTP auf den Server</ListItem>
            </UnorderedList>
        </>
    );
}
export default SubHeading;
