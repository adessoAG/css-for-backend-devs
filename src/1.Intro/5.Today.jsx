import React from 'react';
import { Heading, UnorderedList, ListItem } from 'spectacle';

function SubHeading() {
    return (
        <>
            <div className="centered">

                <Heading fontSize="h2">Heute ...</Heading>
                <UnorderedList fontSize="35px">
                    <ListItem>npm init / yarn init</ListItem>
                    <ListItem>Webpack, Rollup?</ListItem>
                    <ListItem>HTML Templatesprache auswählen und nutzen</ListItem>
                    <ListItem>SASS / CSS in JS aufbauen und Basics aus altem Projekt kopieren</ListItem>
                    <ListItem>Webpack / Rollup mehrfach umkonfigurieren und Stackoverflow bemühen</ListItem>
                    <ListItem>React, Vue, Angular?</ListItem>
                    <ListItem>Git? Wo?</ListItem>
                    <ListItem>Deployment einrichten</ListItem>
                    <ListItem>Im Styleguide entwickeln?</ListItem>
                    <ListItem>...</ListItem>
                </UnorderedList>

            </div>
        </>
    );
}
export default SubHeading;
