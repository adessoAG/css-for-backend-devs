import React from 'react';
import { Heading, Text } from 'spectacle';

function SubHeading() {
    return (
        <div className="centered-image">
            <Heading fontSize="h2">Nicht alles ist eine Navigation</Heading>
            <Text>Ganz dezidiert sind Linklisten im Footer einer Seite, Linklisten in Teaserboxen und Paging-Module <mark>keine Navigation</mark>. Das schreibt das W3C direkt mit Beispielen in den Standard. Es soll verhindert werden, dass ein großer Teil der Seite aus Navigationen besteht.</Text>
        </div>
    );
}
export default SubHeading;
