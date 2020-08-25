import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <>
            <Heading fontSize="h2">Heute ...</Heading>
            <UnorderedList>
                <ListItem>npm init / yarn init</ListItem>
                <ListItem>Webpack, Grunt, Gulp?</ListItem>
                <ListItem>HTML Templatesprache auswählen und nutzen</ListItem>
                <ListItem>SASS aufbauen und Basics aus altem Projekt kopieren</ListItem>
                <ListItem>Webpack mehrfach umkonfigurieren und Stackoverflow bemühen</ListItem>
                <ListItem>React, Vue, jQuery?</ListItem>
                <ListItem>Git? Wo?</ListItem>
                <ListItem>Deployment einrichten</ListItem>
                <ListItem>Im Styleguide entwickeln?</ListItem>
                <ListItem>...</ListItem>
            </UnorderedList>
        </>
    );
}
export default SubHeading;
